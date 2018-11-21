import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { DTO } from '../../generated-dtos.model';
import { PagingService } from '../../service/http/paging.service';
import { SessionService } from '../../service/session.service';
import { BridgeService } from './../../service/http/bridge.service';
import { REST_BRIDGES } from './../../service/http/common/constants';
import { BridgeOwnershipService } from './../bridge-ownership.service';

import BridgeDTO = DTO.BridgeDTO;

@Component({
  selector: 'app-bridge-list',
  templateUrl: './bridge-list.component.html',
  styleUrls: ['./bridge-list.component.scss']
})
export class BridgeListComponent implements OnInit {
  public bridgeData: PagingService<BridgeDTO>;
  public userId: number;
  public isAdmin: boolean;

  constructor(
    private bridgeOwnershipService: BridgeOwnershipService,
    pagingService: PagingService<BridgeDTO>,
    private sessionService: SessionService,
    private bridgeService: BridgeService
  ) {
    pagingService.setUrl(REST_BRIDGES);
    this.bridgeData = pagingService;
  }

  public ngOnInit(): void {
    this.userId = this.sessionService.getUserId();
    this.isAdmin = this.sessionService.isAdmin();
    // delay for the HueSDK to connect to the bridge (is needed for a set hue user property)
    this.bridgeOwnershipService.bridgeCreated$
      .pipe(delay(400))
      .subscribe(() => {
        this.bridgeData.refresh();
      });
  }

  public removeBridge(bridge: BridgeDTO): void {
    this.bridgeService.remove(bridge.id).subscribe(() => {
      this.bridgeData.refresh();
    });
  }
}

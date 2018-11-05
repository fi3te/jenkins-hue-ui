import { BridgeService } from './../../service/http/bridge.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import BridgeCreateDTO = DTO.BridgeCreateDTO;
import { SessionService } from '../../service/session.service';
import { FormControl, NgModel } from '@angular/forms';
import { BridgeOwnershipService } from '../bridge-ownership.service';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-add-bridge',
  templateUrl: './add-bridge.component.html',
  styleUrls: ['./add-bridge.component.scss']
})
export class AddBridgeComponent implements OnInit {
  public loadingBridges: boolean;

  public ip: string;

  public ipPattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

  @ViewChild('bridgeIp')
  public bridgeIp: NgModel;

  private userId: number;

  constructor(
    private bridgeService: BridgeService,
    private sessionService: SessionService,
    private bridgeOwnershipService: BridgeOwnershipService,
    private alertService: AlertService
  ) {}

  public ngOnInit(): void {
    this.userId = this.sessionService.getUserId();
  }

  public createBridge(): void {
    const bridgeCreateDTO: BridgeCreateDTO = {
      ip: this.ip,
      userId: this.userId
    };
    this.bridgeService.create(bridgeCreateDTO).subscribe(next => {
      this.bridgeOwnershipService.bridgeCreated();
      this.alertService.info('Bridge hinzugefügt!');
    });

    this.resetForm();
  }

  public searchForBridges(): void {
    // TODO
  }

  private resetForm(): void {
    this.ip = '';
    this.bridgeIp.control.markAsPristine({onlySelf: true});
  }
}

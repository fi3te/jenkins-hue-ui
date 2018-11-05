import { BridgeOwnershipService } from './../bridge-ownership.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-bridge-list',
  templateUrl: './bridge-list.component.html',
  styleUrls: ['./bridge-list.component.scss']
})
export class BridgeListComponent implements OnInit {

  constructor(private bridgeOwnershipService: BridgeOwnershipService) { }

  public ngOnInit(): void {
    // delay for the HueSDK to connect to the bridge (is needed for a set hue user property)
    this.bridgeOwnershipService.bridgeCreated$.pipe(delay(400)).subscribe(() => {
      // TODO
    });
  }

}

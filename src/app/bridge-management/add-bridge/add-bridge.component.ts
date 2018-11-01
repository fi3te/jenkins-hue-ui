import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bridge',
  templateUrl: './add-bridge.component.html',
  styleUrls: ['./add-bridge.component.scss']
})
export class AddBridgeComponent implements OnInit {

  public loadingBridges: boolean;

  public ip: string;

  public ipPattern = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';

  constructor() { }

  ngOnInit() {
  }

  public createBridge(): void {
    // TODO
  }

  public searchForBridges(): void {
    // TODO
  }
}

import { Component, OnInit } from '@angular/core';

import { Alert } from '../service/model/alert.model';
import { AlertService } from './../service/alert.service';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent implements OnInit {
  public alerts: Alert[] = [];

  constructor(private alertService: AlertService) {}

  public ngOnInit(): void {
    this.alertService.alert$.subscribe(next => {
      this.alerts.push(next);
    });
  }

  public onClosed(dismissedAlert: Alert): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}

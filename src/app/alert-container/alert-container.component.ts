import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';

import { Alert } from '../service/model/alert.model';
import { AlertService } from '../service/alert.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent implements OnInit, OnDestroy {

  @Input()
  public top = '60px';

  @Input()
  public right = '30px';

  @ViewChildren('alertComponent')
  public alertComponents: QueryList<NgbAlert>;

  public alerts: Alert[] = [];

  private destroyed$ = new Subject<boolean>();

  constructor(private alertService: AlertService) {
  }

  public ngOnInit(): void {
    this.alertService.alert$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(next => {
      this.alerts.push(next);
      setTimeout(() => {
        this.alertComponents.get(0).close();
        setTimeout(() => this.alerts.shift(), 500);
      }, next.timeout);
    });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

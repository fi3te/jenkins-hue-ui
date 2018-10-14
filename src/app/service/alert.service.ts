import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, ALERT_DEFAULT_TIMEOUT } from './model/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert$ = new Subject<Alert>();

  public success(message: string, timeout?: number): void {
    this.push(message, 'success', timeout);
  }

  public info(message: string, timeout?: number): void {
    this.push(message, 'info', timeout);
  }

  public warning(message: string, timeout?: number): void {
    this.push(message, 'warning', timeout);
  }

  public danger(message: string, timeout?: number): void {
    this.push(message, 'danger', timeout);
  }

  private push(message: string, type: string, timeout?: number) {
    this.alert$.next({
      message: message,
      type: type,
      timeout: (timeout === undefined) ? ALERT_DEFAULT_TIMEOUT : timeout
    });
  }
}

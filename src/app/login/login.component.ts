import { Router } from '@angular/router';
import { AlertService } from './../service/alert.service';
import { SessionService } from './../service/session.service';
import { Component } from '@angular/core';
import { Credentials } from '../service/model/credentials.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public credentials: Credentials = {};

  private failedAttempts = 0;

  constructor(private sessionService: SessionService, private alertService: AlertService, private router: Router) { }

  public login(): void {
    this.sessionService.login(this.credentials).subscribe(() => {
      this.sessionService.getPrincipal().subscribe(() => {
        this.router.navigate(['dashboard2']);
      }, () => {
        this.sessionService.reloadPage();
      });
    }, (error: HttpErrorResponse) => {
      if (error.error.message.indexOf('Access Denied') > -1) {
        this.failedAttempts++;
        this.alertService.danger(`Benutzername/Passwort falsch! (Fehlversuche: ${this.failedAttempts})`);
      } else {
        this.sessionService.reloadPage();
      }
    });
  }

}

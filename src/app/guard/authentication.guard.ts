import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard  {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const loggedIn = this.sessionService.isLoggedIn();
    if (!loggedIn) {
      this.router.navigate(['login']);
    }
    return loggedIn;
  }
}

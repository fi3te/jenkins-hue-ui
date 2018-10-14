import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private sessionService: SessionService,
    private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const loggedIn = this.sessionService.isLoggedIn();
    if (!loggedIn) {
      this.router.navigate(['login']);
    }
    return loggedIn;
  }
}

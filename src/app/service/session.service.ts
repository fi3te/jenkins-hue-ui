import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DTO } from './../generated-dtos.model';
import { UniversalService } from './http/universal.service';
import { Credentials } from './model/credentials.model';
import { Principal } from './model/principal.model';

import PrincipalDTO = DTO.PrincipalDTO;
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { REST_LOGIN, REST_LOGOUT } from './http/common/constants';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private principal: Principal;

  constructor(private httpClient: HttpClient, private universalService: UniversalService) {}

  public isLoggedIn(): boolean {
    return !!this.principal;
  }

  public isAdmin(): boolean {
    if (this.principal) {
      for (const a of this.principal.authorities) {
        if (a.authority === 'ROLE_ADMIN') {
          return true;
        }
      }
    }
    return false;
  }

  public getTeamId(): number {
    return this.principal ? this.principal.teamId : undefined;
  }

  public getUserId(): number {
    return this.principal ? this.principal.userId : undefined;
  }

  public getUsername(): string {
    return this.principal ? this.principal.username : undefined;
  }

  public getPrincipal(): Observable<PrincipalDTO> {
    return this.universalService.getPrincipal().pipe(
      tap((next: any) => {
        this.principal = {
          username: next.principal.principal.username,
          userId: next.userId,
          teamId: next.teamId,
          authorities: next.principal.principal.authorities
        };
      })
    );
  }

  public fetchPrincipal(): void {
    this.getPrincipal().subscribe();
  }

  public silentLogin(credentials: Credentials): void {
    this.login(credentials).subscribe(() => {
        this.fetchPrincipal();
      });
  }

  public login(credentials: Credentials): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);

    return this.httpClient
      .post(REST_LOGIN, body.toString(), {
        headers: headers,
        withCredentials: true
      });
  }

  public logout(): void {
    this.httpClient.post(REST_LOGOUT, {}).subscribe((next) => {
      this.reloadPage();
    }, (error) => {
      this.reloadPage();
    });
  }

  public reloadPage(): void {
    window.location.reload();
  }
}

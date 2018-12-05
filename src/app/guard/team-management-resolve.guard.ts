import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { REST_TEAMS } from '../service/http/common/constants';
import { PagingService } from '../shared/paging/paging.service';
import { DTO } from './../generated-dtos.model';

import TeamUsersDTO = DTO.TeamUsersDTO;
@Injectable({
  providedIn: 'root'
})
export class TeamManagementResolveGuard
  implements Resolve<PagingService<TeamUsersDTO>> {
  constructor(private httpClient: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PagingService<TeamUsersDTO>> {
    return PagingService.getInstance<TeamUsersDTO>(this.httpClient, REST_TEAMS);
  }
}

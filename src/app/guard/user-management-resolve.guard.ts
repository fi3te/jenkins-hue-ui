import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { REST_USERS } from '../service/http/common/constants';
import { PagingService } from '../service/http/paging.service';
import { DTO } from './../generated-dtos.model';

import UserDTO = DTO.UserDTO;
@Injectable({
  providedIn: 'root'
})
export class UserManagementResolveGuard
  implements Resolve<PagingService<UserDTO>> {
  constructor(private httpClient: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PagingService<UserDTO>> {
    return PagingService.getInstance<UserDTO>(this.httpClient, REST_USERS);
  }
}

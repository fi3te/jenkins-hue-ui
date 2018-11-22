import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { REST_BRIDGES } from '../service/http/common/constants';
import { PagingService } from '../service/http/paging.service';
import { DTO } from './../generated-dtos.model';

import BridgeDTO = DTO.BridgeDTO;
@Injectable({
  providedIn: 'root'
})
export class BridgeManagementResolveGuard
  implements Resolve<PagingService<BridgeDTO>> {
  constructor(private httpClient: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PagingService<BridgeDTO>> {
    return PagingService.getInstance<BridgeDTO>(this.httpClient, REST_BRIDGES);
  }
}

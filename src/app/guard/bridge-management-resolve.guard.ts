import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { REST_BRIDGES } from '../service/http/common/constants';
import { PagingService } from '../shared/paging/paging.service';
import { DTO } from '../generated-dtos.model';
import BridgeDTO = DTO.BridgeDTO;

@Injectable({
  providedIn: 'root'
})
export class BridgeManagementResolveGuard {
  constructor(private httpClient: HttpClient) {}

  resolve(): Observable<PagingService<BridgeDTO>> {
    return PagingService.getInstance<BridgeDTO>(this.httpClient, REST_BRIDGES);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DTO } from '../../generated-dtos.model';
import { REST_BRIDGES } from './common/constants';

import FoundBridgeDTO = DTO.FoundBridgeDTO;
import BridgeDTO = DTO.BridgeDTO;
import BridgeCreateDTO = DTO.BridgeCreateDTO;

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  constructor(private httpClient: HttpClient) {}

  public findAvailable(): Observable<FoundBridgeDTO[]> {
    return this.httpClient.get<FoundBridgeDTO[]>(`${REST_BRIDGES}/available`);
  }

  public find(
    page: number,
    size: number,
    searchItem?: string
  ): Observable<BridgeDTO[]> {
    const options = searchItem
      ? { params: new HttpParams().set('searchItem', `${searchItem}`) }
      : undefined;
    return this.httpClient.get<BridgeDTO[]>(`${REST_BRIDGES}/${page}/${size}`, options);
  }

  public count(searchItem?: string): Observable<number> {
    const options = searchItem
      ? { params: new HttpParams().set('searchItem', `${searchItem}`) }
      : undefined;
    return this.httpClient.get<number>(`${REST_BRIDGES}/count`, options);
  }

  public create(bridgeCreateDTO: BridgeCreateDTO): Observable<BridgeDTO> {
    return this.httpClient.post(`${REST_BRIDGES}/create`, bridgeCreateDTO);
  }

  public remove(id: number): Observable<any> {
    return this.httpClient.delete(`${REST_BRIDGES}/remove/${id}`);
  }
}

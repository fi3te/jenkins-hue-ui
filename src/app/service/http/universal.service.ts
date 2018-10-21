import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DTO } from './../../generated-dtos.model';
import { REST_UNIVERSAL } from './common/constants';

import PrincipalDTO = DTO.PrincipalDTO;
import DashboardInformationDTO = DTO.DashboardInformationDTO;
import ScenarioConfigDTO = DTO.ScenarioConfigDTO;
import { SimpleEnum } from '../model/simple-enum.model';
import findWithAttr from './common/find-with-attr';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  constructor(private httpClient: HttpClient) {}

  public scenarios(exclude?: ScenarioConfigDTO[]): Observable<SimpleEnum[]> {
    if (exclude && exclude.length > 0) {
      return this.httpClient.get<SimpleEnum[]>(`${REST_UNIVERSAL}/scenarios`).pipe(map(
        (next: SimpleEnum[]) => {
          for (const tmp of exclude) {
            const index = findWithAttr(next, 'name', tmp.scenario.name);
            if (index > -1) {
              next.splice(index, 1);
            }
          }
          return next;
        }
      ));
    } else {
      return this.httpClient.get<SimpleEnum[]>(`${REST_UNIVERSAL}/scenarios`);
    }
  }

  public roles(): Observable<SimpleEnum[]> {
    return this.httpClient.get<SimpleEnum[]>(`${REST_UNIVERSAL}/roles`);
  }

  public getDashboardInformation(
    teamId: number
  ): Observable<DashboardInformationDTO> {
    const params = new HttpParams().set('teamId', `${teamId}`);
    return this.httpClient.get(`${REST_UNIVERSAL}/dashboard`, {
      params: params
    });
  }

  public getPrincipal(): Observable<PrincipalDTO> {
    return this.httpClient.get(`${REST_UNIVERSAL}/principal`);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DTO } from './../../generated-dtos.model';
import { REST_UNIVERSAL } from './common/constants';

import PrincipalDTO = DTO.PrincipalDTO;
import DashboardInformationDTO = DTO.DashboardInformationDTO;

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  constructor(private httpClient: HttpClient) {}

  public scenarios(): Observable<any> {
    return this.httpClient.get(`${REST_UNIVERSAL}/scenarios`);
  }

  public roles(): Observable<any> {
    return this.httpClient.get(`${REST_UNIVERSAL}/roles`);
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

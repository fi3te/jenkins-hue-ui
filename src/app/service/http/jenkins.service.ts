import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DTO } from '../../generated-dtos.model';
import { REST_JENKINS } from './common/constants';

import JenkinsJobNamesDTO = DTO.JenkinsJobNamesDTO;

@Injectable({
  providedIn: 'root'
})
export class JenkinsService {
  constructor(private httpClient: HttpClient) {}

  public getJenkinsUrl(): Observable<string> {
    return this.httpClient.get<string>(`${REST_JENKINS}/url`);
  }

  public getJenkinsJobNames(): Observable<JenkinsJobNamesDTO> {
    return this.httpClient.get(`${REST_JENKINS}/jobs`);
  }
}

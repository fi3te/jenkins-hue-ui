import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DTO } from '../../generated-dtos.model';
import { REST_JENKINS } from './common/constants';
import findWithAttr from './common/find-with-attr';

import JenkinsJobNamesDTO = DTO.JenkinsJobNamesDTO;
import JobDTO = DTO.JobDTO;

@Injectable({
  providedIn: 'root'
})
export class JenkinsService {
  constructor(private httpClient: HttpClient) {}

  public getJenkinsUrl(): Observable<string> {
    return this.httpClient.get<string>(`${REST_JENKINS}/url`);
  }

  public getJenkinsJobNames(exclude?: JobDTO[]): Observable<JenkinsJobNamesDTO> {
    if (exclude && exclude.length > 0) {
      return this.httpClient.get(`${REST_JENKINS}/jobs`).pipe(
        map((next: JenkinsJobNamesDTO) => {
          for (const tmp of exclude) {
            const index = findWithAttr(next.jobs, 'name', tmp.name);
            if (index > -1) {
              next.jobs.splice(index, 1);
            }
          }
          return next;
        })
      );
    } else {
      return this.httpClient.get(`${REST_JENKINS}/jobs`);
    }
  }
}

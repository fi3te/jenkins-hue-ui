import { REST_TEAMS } from './common/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DTO } from '../../generated-dtos.model';

import TeamUsersDTO = DTO.TeamUsersDTO;
import TeamCreateDTO = DTO.TeamCreateDTO;
import TeamLampsDTO = DTO.TeamLampsDTO;
import TeamUpdateDTO = DTO.TeamUpdateDTO;
import TeamRenameDTO = DTO.TeamRenameDTO;

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private httpClient: HttpClient) {}

  public find(
    page: number,
    size: number,
    searchItem?: string
  ): Observable<TeamUsersDTO[]> {
    const options = searchItem
      ? { params: new HttpParams().set('searchItem', `${searchItem}`) }
      : undefined;
    return this.httpClient.get<TeamUsersDTO[]>(`${REST_TEAMS}/${page}/${size}`, options);
  }

  public count(searchItem?: string): Observable<number> {
    const options = searchItem
      ? { params: new HttpParams().set('searchItem', `${searchItem}`) }
      : undefined;
    return this.httpClient.get<number>(`${REST_TEAMS}/count`, options);
  }

  public create(teamCreateDTO: TeamCreateDTO): Observable<TeamLampsDTO> {
    return this.httpClient.post(`${REST_TEAMS}/create`, teamCreateDTO);
  }

  public update(teamUpdateDTO: TeamUpdateDTO): Observable<TeamUsersDTO> {
    return this.httpClient.post(`${REST_TEAMS}/update`, teamUpdateDTO);
  }

  public rename(teamRenameDTO: TeamRenameDTO): Observable<TeamUsersDTO> {
    return this.httpClient.post(`${REST_TEAMS}/rename`, teamRenameDTO);
  }

  public findOne(id: number): Observable<TeamUsersDTO> {
    return this.httpClient.get(`${REST_TEAMS}/${id}`);
  }

  public remove(id: number): Observable<any> {
    return this.httpClient.delete(`${REST_TEAMS}/remove/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DTO } from '../../generated-dtos.model';
import { REST_LAMPS } from './common/constants';

import LampDTO = DTO.LampDTO;
import LampCreateDTO = DTO.LampCreateDTO;
import LampUpdateDTO = DTO.LampUpdateDTO;
import LampRenameDTO = DTO.LampRenameDTO;
import LampGroupedScenariosDTO = DTO.LampGroupedScenariosDTO;
import LampHueDTO = DTO.LampHueDTO;
import TeamLampsDTO = DTO.TeamLampsDTO;
import LampNameDTO = DTO.LampNameDTO;
import LampTestDTO = DTO.LampTestDTO;
import LampTurnOffDTO = DTO.LampTurnOffDTO;

@Injectable({
  providedIn: 'root'
})
export class LampService {
  constructor(private httpClient: HttpClient) {}

  public create(lampCreateDTO: LampCreateDTO): Observable<LampDTO> {
    return this.httpClient.post(`${REST_LAMPS}/create`, lampCreateDTO);
  }

  public update(lampUpdateDTO: LampUpdateDTO): Observable<LampDTO> {
    return this.httpClient.post(`${REST_LAMPS}/update`, lampUpdateDTO);
  }

  public rename(lampRenameDTO: LampRenameDTO): Observable<LampDTO> {
    return this.httpClient.post(`${REST_LAMPS}/rename`, lampRenameDTO);
  }

  public remove(id: number): Observable<any> {
    return this.httpClient.delete(`${REST_LAMPS}/remove/${id}`);
  }

  public findAll(): Observable<LampDTO[]> {
    return this.httpClient.get<LampDTO[]>(`${REST_LAMPS}`);
  }

  public findOne(id: number): Observable<LampGroupedScenariosDTO> {
    return this.httpClient.get(`${REST_LAMPS}/${id}`);
  }

  public count(): Observable<number> {
    return this.httpClient.get<number>(`${REST_LAMPS}/count`);
  }

  public findAllAvailable(): Observable<LampHueDTO[]> {
    return this.httpClient.get<LampHueDTO[]>(`${REST_LAMPS}/available`);
  }

  public countAvailable(): Observable<number> {
    return this.httpClient.get<number>(`${REST_LAMPS}/countAvailable`);
  }

  public findAllOfATeam(teamId: number): Observable<TeamLampsDTO> {
    return this.httpClient.get(`${REST_LAMPS}/team/${teamId}`);
  }

  public findAllLampNamesOfATeam(teamId: number): Observable<LampNameDTO[]> {
    return this.httpClient.get<LampNameDTO[]>(
      `${REST_LAMPS}/team/${teamId}/nameOnly`
    );
  }

  public testScenario(lamp: LampTestDTO): Observable<any> {
    return this.httpClient.post(`${REST_LAMPS}/testScenario`, lamp);
  }

  public pulseOnce(hueUniqueId: string): Observable<any> {
    return this.httpClient.get(`${REST_LAMPS}/pulseOnce/${hueUniqueId}`);
  }

  public turnOff(lamp: LampTurnOffDTO): Observable<any> {
    return this.httpClient.post(`${REST_LAMPS}/turnOff`, lamp);
  }
}

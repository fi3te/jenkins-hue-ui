import { REST_UNIVERSAL } from './common/constants';
import { DTO } from './../../generated-dtos.model';
import { Injectable } from '@angular/core';
import PrincipalDTO = DTO.PrincipalDTO;
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  constructor(private httpClient: HttpClient) {}

  public getPrincipal(): Observable<PrincipalDTO> {
    return this.httpClient.get(`${REST_UNIVERSAL}/principal`);
  }
}

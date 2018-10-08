import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DTO } from '../generated-dtos.model';
import UserDTO = DTO.UserDTO;
import { Observable } from 'rxjs';
import { REST_USERS } from './constants';
import mapResponse from './map-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  public findAll(page: number, size: number): Observable<any> {
    return this.http.get(`${REST_USERS}/${page}/${size}`).pipe(mapResponse);
  }

}

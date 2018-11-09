import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DTO } from '../../generated-dtos.model';

import UserDTO = DTO.UserDTO;
import UserCreateDTO = DTO.UserCreateDTO;
import UserUpdateDTO = DTO.UserUpdateDTO;
import { REST_USERS } from './common/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public find(
    page: number,
    size: number,
    searchItem?: string
  ): Observable<UserDTO[]> {
    const options = searchItem ? {params: new HttpParams().set('searchItem', `${searchItem}`)} : undefined;
    return this.httpClient.get<UserDTO[]>(`${REST_USERS}/${page}/${size}`, options);
  }

  public count(searchItem?: string): Observable<number> {
    const options = searchItem ? {params: new HttpParams().set('searchItem', `${searchItem}`)} : undefined;
    return this.httpClient.get<number>(`${REST_USERS}/count`, options);
  }

  public create(userCreateDTO: UserCreateDTO): Observable<UserDTO> {
    return this.httpClient.post(`${REST_USERS}/create`, userCreateDTO);
  }

  public update(userUpdateDTO: UserUpdateDTO): Observable<UserDTO> {
    return this.httpClient.post(`${REST_USERS}/update`, userUpdateDTO);
  }

  public remove(id: number): Observable<any> {
    return this.httpClient.delete(`${REST_USERS}/remove/${id}`);
  }
}

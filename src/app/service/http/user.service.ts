import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DTO } from '../../generated-dtos.model';

import UserDTO = DTO.UserDTO;
import UserCreateDTO = DTO.UserCreateDTO;
import UserUpdateDTO = DTO.UserUpdateDTO;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  public find(
    page: number,
    size: number,
    searchItem?: string
  ): Observable<UserDTO[]> {
    return null;
  }

  public count(searchItem?: string): Observable<number> {
    return null;
  }

  public create(userCreateDTO: UserCreateDTO): Observable<UserDTO> {
    return null;
  }

  public update(userUpdateDtO: UserUpdateDTO): Observable<UserDTO> {
    return null;
  }

  public remove(id: number): void {}
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DTO } from '../generated-dtos.model';
import UserDTO = DTO.UserDTO;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public findAll(page: number, size: number): UserDTO[] {
    return [];
  }

}

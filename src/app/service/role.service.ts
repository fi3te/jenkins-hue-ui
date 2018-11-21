import { Injectable } from '@angular/core';

import { SimpleEnum } from './model/simple-enum.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public containsAdminRole(roles: SimpleEnum[]): boolean {
      for (const role of roles) {
        const roleName = role.name;
        if (roleName === 'ROLE_ADMIN') {
          return true;
        }
      }
      return false;
  }
}

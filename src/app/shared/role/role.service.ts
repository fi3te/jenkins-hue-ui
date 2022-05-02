import { UniversalService } from '../../service/http/universal.service';
import { AlertService } from '../../service/alert.service';
import { Injectable } from '@angular/core';

import { ChangeRolesModalComponent } from './change-roles-modal/change-roles-modal.component';
import { UserService } from '../../service/http/user.service';
import { SimpleEnum } from '../../service/model/simple-enum.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { modalErrorHandler } from '../util';

@Injectable()
export class RoleService {

  constructor(
    private alertService: AlertService,
    private universalService: UniversalService,
    private userService: UserService,
    private modalService: NgbModal
  ) {
  }

  public containsAdminRole(roles: SimpleEnum[]): boolean {
    for (const role of roles) {
      const roleName = role.name;
      if (roleName === 'ROLE_ADMIN') {
        return true;
      }
    }
    return false;
  }

  public changeRoles(userId: number, currentRoles: SimpleEnum[], loadingRoles: (loading: boolean) => void, rolesUpdated: () => void): void {
    loadingRoles(true);
    this.universalService.roles().subscribe((next: SimpleEnum[]) => {
      loadingRoles(false);

      const ngbModalRef = this.modalService.open(ChangeRolesModalComponent);
      ngbModalRef.componentInstance.roles = next;
      ngbModalRef.componentInstance.selectedRoles = currentRoles;
      ngbModalRef.result.then((roles: SimpleEnum[]) => {
        this.userService.update({
          id: userId, roles
        }).subscribe(() => {
          rolesUpdated();
          this.alertService.info('Rollen aktualisiert!');
        });
      }).catch(modalErrorHandler);
    }, () => {
      loadingRoles(false);
    });
  }
}

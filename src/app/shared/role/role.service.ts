import { UniversalService } from '../../service/http/universal.service';
import { AlertService } from '../../service/alert.service';
import { Injectable } from '@angular/core';

import { ChangeRolesModalComponent } from './change-roles-modal/change-roles-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../../service/http/user.service';
import { SimpleEnum } from '../../service/model/simple-enum.model';

@Injectable()
export class RoleService {

  constructor(
    private alertService: AlertService,
    private universalService: UniversalService,
    private userService: UserService,
    private modalService: BsModalService
  ) {}

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

      const initialState = {
        roles: next,
        selectedRoles: currentRoles
      };

      const bsModalRef: BsModalRef = this.modalService.show(
        ChangeRolesModalComponent,
        { initialState }
      );

      const subscription = this.modalService.onHide.subscribe(() => {
        const saved = bsModalRef.content.saved;
        const roles = bsModalRef.content.selectedRoles;

        if (saved) {
          this.userService.update({
            id: userId, roles
          }).subscribe(() => {
            rolesUpdated();
            this.alertService.info('Rollen aktualisiert!');
          });
        }
        subscription.unsubscribe();
      });
    }, () => {
      loadingRoles(false);
    });
  }
}

import { ChangeRolesModalComponent } from './../shared/change-roles-modal/change-roles-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  declarations: [UserManagementComponent, UserListComponent],
  entryComponents: [ChangeRolesModalComponent]
})
export class UserManagementModule { }

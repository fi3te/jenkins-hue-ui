import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { PagingModule } from '../shared/paging/paging.module';
import { RoleModule } from '../shared/role/role.module';

@NgModule({
    imports: [
        CommonModule,
        UserManagementRoutingModule,
        SharedModule,
        PagingModule,
        RoleModule,
        FormsModule
    ],
    declarations: [UserManagementComponent, UserListComponent, AddUserComponent]
})
export class UserManagementModule { }

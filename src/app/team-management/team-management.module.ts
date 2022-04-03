import { PagingModule } from './../shared/paging/paging.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RenameModalComponent } from '../shared/rename-modal/rename-modal.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { FormsModule } from '@angular/forms';
import { RoleModule } from '../shared/role/role.module';
import { ChangeRolesModalComponent } from '../shared/role/change-roles-modal/change-roles-modal.component';

@NgModule({
    imports: [
        CommonModule,
        TeamManagementRoutingModule,
        SharedModule,
        PagingModule,
        RoleModule,
        ModalModule.forRoot(),
        FormsModule
    ],
    declarations: [TeamManagementComponent, TeamListComponent, AddTeamComponent]
})
export class TeamManagementModule { }

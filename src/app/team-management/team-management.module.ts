import { PagingModule } from '../shared/paging/paging.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { FormsModule } from '@angular/forms';
import { RoleModule } from '../shared/role/role.module';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TeamManagementRoutingModule,
    SharedModule,
    PagingModule,
    RoleModule,
    FormsModule
  ],
  declarations: [
    TeamManagementComponent,
    TeamListComponent,
    AddTeamComponent
  ],
  providers: [
    NgbModalConfig,
    NgbModal
  ]
})
export class TeamManagementModule {
}

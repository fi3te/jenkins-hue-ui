import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RenameModalComponent } from '../shared/rename-modal/rename-modal.component';

@NgModule({
  imports: [
    CommonModule,
    TeamManagementRoutingModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  declarations: [TeamManagementComponent, TeamListComponent],
  entryComponents: [
    RenameModalComponent
  ]
})
export class TeamManagementModule { }

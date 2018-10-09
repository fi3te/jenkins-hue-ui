import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  imports: [
    CommonModule,
    TeamManagementRoutingModule
  ],
  declarations: [TeamManagementComponent, TeamListComponent]
})
export class TeamManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamManagementRoutingModule
  ],
  declarations: [TeamManagementComponent]
})
export class TeamManagementModule { }

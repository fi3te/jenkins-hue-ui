import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamManagementComponent } from './team-management.component';

const routes: Routes = [
  {
    path: '',
    component: TeamManagementComponent,
    data: {
      title: 'TeamVerwaltung'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagementRoutingModule { }

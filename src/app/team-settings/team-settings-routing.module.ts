import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamSettingsComponent } from './team-settings.component';

const routes: Routes = [
  {
    path: '',
    component: TeamSettingsComponent,
    data: {
      title: 'Teameinstellungen'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamSettingsRoutingModule { }

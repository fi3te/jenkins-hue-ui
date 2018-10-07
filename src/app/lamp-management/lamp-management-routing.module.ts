import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LampManagementComponent } from './lamp-management.component';

const routes: Routes = [
  {
    path: '',
    component: LampManagementComponent,
    data: {
      title: 'Lampenverwaltung'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LampManagementRoutingModule { }

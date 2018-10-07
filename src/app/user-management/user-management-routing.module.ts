import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    data: {
      title: 'Benutzerverwaltung'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

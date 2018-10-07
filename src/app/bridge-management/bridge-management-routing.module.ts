import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BridgeManagementComponent } from './bridge-management.component';

const routes: Routes = [
  {
    path: '',
    component: BridgeManagementComponent,
    data: {
      title: 'Bridgeverwaltung'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BridgeManagementRoutingModule { }

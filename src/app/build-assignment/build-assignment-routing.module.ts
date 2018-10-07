import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BuildAssignmentComponent } from './build-assignment.component';

const routes: Routes = [
  {
    path: '',
    component: BuildAssignmentComponent,
    data: {
      title: 'Buildzuweisung'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildAssignmentRoutingModule { }

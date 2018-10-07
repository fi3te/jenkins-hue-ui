import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildAssignmentComponent } from './build-assignment.component';
import { BuildAssignmentRoutingModule } from './build-assignment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BuildAssignmentRoutingModule
  ],
  declarations: [BuildAssignmentComponent]
})
export class BuildAssignmentModule { }

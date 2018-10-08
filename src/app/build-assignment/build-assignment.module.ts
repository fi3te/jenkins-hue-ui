import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildAssignmentComponent } from './build-assignment.component';
import { BuildAssignmentRoutingModule } from './build-assignment-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    BuildAssignmentRoutingModule,
    AccordionModule
  ],
  declarations: [BuildAssignmentComponent]
})
export class BuildAssignmentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildAssignmentComponent } from './build-assignment.component';
import { BuildAssignmentRoutingModule } from './build-assignment-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AddJobsModalComponent } from './add-jobs-modal/add-jobs-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    BuildAssignmentRoutingModule,
    AccordionModule,
    TimepickerModule,
    ModalModule.forRoot()
  ],
  declarations: [BuildAssignmentComponent, AddJobsModalComponent],
  entryComponents: [AddJobsModalComponent]
})
export class BuildAssignmentModule { }

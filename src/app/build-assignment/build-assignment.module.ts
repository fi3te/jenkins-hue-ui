import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildAssignmentComponent } from './build-assignment.component';
import { BuildAssignmentRoutingModule } from './build-assignment-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AddJobsModalComponent } from './add-jobs-modal/add-jobs-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddScenarioModalComponent } from './add-scenario-modal/add-scenario-modal.component';

@NgModule({
  imports: [
    CommonModule,
    BuildAssignmentRoutingModule,
    AccordionModule,
    TimepickerModule,
    ModalModule.forRoot()
  ],
  declarations: [BuildAssignmentComponent, AddJobsModalComponent, AddScenarioModalComponent],
  entryComponents: [AddJobsModalComponent, AddScenarioModalComponent]
})
export class BuildAssignmentModule { }

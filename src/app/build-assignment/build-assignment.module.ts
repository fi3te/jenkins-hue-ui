import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildAssignmentComponent } from './build-assignment.component';
import { BuildAssignmentRoutingModule } from './build-assignment-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AddJobsModalComponent } from './add-jobs-modal/add-jobs-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddScenarioModalComponent } from './add-scenario-modal/add-scenario-modal.component';
import { ScenarioConfigComponent } from './scenario-config/scenario-config.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    BuildAssignmentRoutingModule,
    AccordionModule,
    TimepickerModule,
    ModalModule.forRoot(),
    CollapseModule,
    FormsModule,
    Ng5SliderModule,
    ColorPickerModule
  ],
  declarations: [BuildAssignmentComponent, AddJobsModalComponent, AddScenarioModalComponent, ScenarioConfigComponent],
  entryComponents: [AddJobsModalComponent, AddScenarioModalComponent]
})
export class BuildAssignmentModule { }

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
import { AddScenariosModalComponent } from './add-scenarios-modal/add-scenarios-modal.component';
import { ScenarioConfigComponent } from './scenario-config/scenario-config.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ScenarioConfigGroupComponent } from './scenario-config-group/scenario-config-group.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BuildAssignmentRoutingModule,
    AccordionModule,
    TimepickerModule,
    ModalModule.forRoot(),
    FormsModule,
    Ng5SliderModule,
    ColorPickerModule,
    NgSelectModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    AddJobsModalComponent,
    AddScenariosModalComponent,
    BuildAssignmentComponent,
    RemoveButtonComponent,
    ScenarioConfigComponent,
    ScenarioConfigGroupComponent
  ],
  entryComponents: [AddJobsModalComponent, AddScenariosModalComponent]
})
export class BuildAssignmentModule { }

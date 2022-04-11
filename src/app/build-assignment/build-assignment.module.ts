import { AccordionStateService } from './accordion-state.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildAssignmentComponent } from './build-assignment.component';
import { BuildAssignmentRoutingModule } from './build-assignment-routing.module';
import { AddJobsModalComponent } from './add-jobs-modal/add-jobs-modal.component';
import { AddScenariosModalComponent } from './add-scenarios-modal/add-scenarios-modal.component';
import { ScenarioConfigComponent } from './scenario-config/scenario-config.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ScenarioConfigGroupComponent } from './scenario-config-group/scenario-config-group.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModal, NgbModalConfig, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BuildAssignmentRoutingModule,
    FormsModule,
    ColorPickerModule,
    NgSelectModule,
    NgbTimepickerModule
  ],
  declarations: [
    AddJobsModalComponent,
    AddScenariosModalComponent,
    BuildAssignmentComponent,
    RemoveButtonComponent,
    ScenarioConfigComponent,
    ScenarioConfigGroupComponent
  ],
  providers: [
    AccordionStateService,
    NgbModalConfig,
    NgbModal
  ]
})
export class BuildAssignmentModule {
}

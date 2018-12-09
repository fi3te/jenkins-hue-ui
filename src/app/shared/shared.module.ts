import { ModalBuildingBlockModule } from './modal-building-block/modal-building-block.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { ScenarioConfigSettingsComponent } from './scenario-config-settings/scenario-config-settings.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalBuildingBlockModule,
    Ng5SliderModule,
    ColorPickerModule
  ],
  declarations: [
    RenameModalComponent,
    ScenarioConfigSettingsComponent
  ],
  exports: [
    ModalBuildingBlockModule,
    RenameModalComponent,
    ScenarioConfigSettingsComponent
  ]
})
export class SharedModule { }

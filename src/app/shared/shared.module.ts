import { ModalBuildingBlockModule } from './modal-building-block/modal-building-block.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { ScenarioConfigSettingsComponent } from './scenario-config-settings/scenario-config-settings.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { SliderComponent } from './scenario-config-settings/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalBuildingBlockModule,
    ColorPickerModule
  ],
  declarations: [
    RenameModalComponent,
    ScenarioConfigSettingsComponent,
    SliderComponent
  ],
  exports: [
    ModalBuildingBlockModule,
    RenameModalComponent,
    ScenarioConfigSettingsComponent
  ]
})
export class SharedModule { }

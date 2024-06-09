import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { ScenarioConfigSettingsComponent } from './scenario-config-settings/scenario-config-settings.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { SliderComponent } from './scenario-config-settings/slider/slider.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule
  ],
  declarations: [
    ModalHeaderComponent,
    RenameModalComponent,
    RemoveButtonComponent,
    ScenarioConfigSettingsComponent,
    SliderComponent
  ],
  exports: [
    ModalHeaderComponent,
    RenameModalComponent,
    RemoveButtonComponent,
    ScenarioConfigSettingsComponent
  ]
})
export class SharedModule { }

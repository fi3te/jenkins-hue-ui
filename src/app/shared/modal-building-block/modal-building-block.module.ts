import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalHeaderComponent } from './modal-header/modal-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalHeaderComponent
  ],
  exports: [
    ModalHeaderComponent
  ]
})
export class ModalBuildingBlockModule { }

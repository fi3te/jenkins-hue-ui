import { ModalBuildingBlockModule } from './modal-building-block/modal-building-block.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalBuildingBlockModule
  ],
  declarations: [
    RenameModalComponent
  ],
  exports: [
    ModalBuildingBlockModule,
    RenameModalComponent
  ]
})
export class SharedModule { }

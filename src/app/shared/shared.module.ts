import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RenameModalComponent],
  declarations: [RenameModalComponent]
})
export class SharedModule { }

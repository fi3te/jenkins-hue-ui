import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { ChangeRolesModalComponent } from './change-roles-modal/change-roles-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RenameModalComponent, ChangeRolesModalComponent],
  declarations: [RenameModalComponent, ChangeRolesModalComponent]
})
export class SharedModule { }

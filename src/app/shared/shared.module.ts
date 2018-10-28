import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { ChangeRolesModalComponent } from './change-roles-modal/change-roles-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RenameModalComponent, ChangeRolesModalComponent],
  declarations: [RenameModalComponent, ChangeRolesModalComponent]
})
export class SharedModule { }

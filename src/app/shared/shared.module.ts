import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { ChangeRolesModalComponent } from './change-roles-modal/change-roles-modal.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    RenameModalComponent,
    ChangeRolesModalComponent,
    ModalHeaderComponent
  ],
  declarations: [
    RenameModalComponent,
    ChangeRolesModalComponent,
    ModalHeaderComponent
  ]
})
export class SharedModule { }

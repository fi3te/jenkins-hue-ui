import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeRolesModalComponent } from './change-roles-modal/change-roles-modal.component';
import { RoleService } from './role.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalBuildingBlockModule } from '../modal-building-block/modal-building-block.module';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ModalBuildingBlockModule
  ],
  declarations: [
    ChangeRolesModalComponent
  ],
  exports: [
    ChangeRolesModalComponent
  ],
  providers: [
    RoleService,
    NgbModalConfig,
    NgbModal
  ]
})
export class RoleModule {
}

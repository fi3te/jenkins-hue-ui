import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeRolesModalComponent } from './change-roles-modal/change-roles-modal.component';
import { RoleService } from './role.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    SharedModule
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

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LampManagementComponent } from './lamp-management.component';
import { LampManagementRoutingModule } from './lamp-management-routing.module';
import { AvailableLampsComponent } from './available-lamps/available-lamps.component';
import { LampListComponent } from './lamp-list/lamp-list.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    LampManagementRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    LampManagementComponent,
    AvailableLampsComponent,
    LampListComponent
  ],
  providers: [
    NgbModalConfig,
    NgbModal
  ]
})
export class LampManagementModule {
}

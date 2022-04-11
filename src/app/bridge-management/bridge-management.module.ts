import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BridgeListComponent } from './bridge-list/bridge-list.component';
import { BridgeManagementRoutingModule } from './bridge-management-routing.module';
import { BridgeManagementComponent } from './bridge-management.component';
import { FoundBridgesModalComponent } from './found-bridges-modal/found-bridges-modal.component';
import { AddBridgeComponent } from './add-bridge/add-bridge.component';
import { PagingModule } from '../shared/paging/paging.module';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagingModule,
    FormsModule,
    BridgeManagementRoutingModule
  ],
  declarations: [
    BridgeManagementComponent,
    BridgeListComponent,
    FoundBridgesModalComponent,
    AddBridgeComponent
  ],
  providers: [
    NgbModalConfig,
    NgbModal
  ]
})
export class BridgeManagementModule {
}

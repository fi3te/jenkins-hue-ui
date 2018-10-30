import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BridgeListComponent } from './bridge-list/bridge-list.component';
import { BridgeManagementRoutingModule } from './bridge-management-routing.module';
import { BridgeManagementComponent } from './bridge-management.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FoundBridgesModalComponent } from './found-bridges-modal/found-bridges-modal.component';
import { AddBridgeComponent } from './add-bridge/add-bridge.component';

@NgModule({
  entryComponents: [
    FoundBridgesModalComponent
  ],
  imports: [CommonModule, BridgeManagementRoutingModule, ModalModule.forRoot()],
  declarations: [
    BridgeManagementComponent,
    BridgeListComponent,
    FoundBridgesModalComponent,
    AddBridgeComponent
  ],

})
export class BridgeManagementModule {}

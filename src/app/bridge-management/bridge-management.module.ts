import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BridgeManagementComponent } from './bridge-management.component';
import { BridgeManagementRoutingModule } from './bridge-management-routing.module';
import { BridgeListComponent } from './bridge-list/bridge-list.component';

@NgModule({
  imports: [
    CommonModule,
    BridgeManagementRoutingModule
  ],
  declarations: [BridgeManagementComponent, BridgeListComponent]
})
export class BridgeManagementModule { }

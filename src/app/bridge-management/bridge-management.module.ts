import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BridgeManagementComponent } from './bridge-management.component';
import { BridgeManagementRoutingModule } from './bridge-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BridgeManagementRoutingModule
  ],
  declarations: [BridgeManagementComponent]
})
export class BridgeManagementModule { }

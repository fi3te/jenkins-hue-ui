import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LampManagementComponent } from './lamp-management.component';
import { LampManagementRoutingModule } from './lamp-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LampManagementRoutingModule
  ],
  declarations: [LampManagementComponent]
})
export class LampManagementModule { }

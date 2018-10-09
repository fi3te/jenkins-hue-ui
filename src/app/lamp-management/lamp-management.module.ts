import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LampManagementComponent } from './lamp-management.component';
import { LampManagementRoutingModule } from './lamp-management-routing.module';
import { AvailableLampsComponent } from './available-lamps/available-lamps.component';
import { LampListComponent } from './lamp-list/lamp-list.component';

@NgModule({
  imports: [
    CommonModule,
    LampManagementRoutingModule
  ],
  declarations: [LampManagementComponent, AvailableLampsComponent, LampListComponent]
})
export class LampManagementModule { }

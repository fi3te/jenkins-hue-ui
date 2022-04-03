import { FormsModule } from '@angular/forms';
import { RenameModalComponent } from './../shared/rename-modal/rename-modal.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LampManagementComponent } from './lamp-management.component';
import { LampManagementRoutingModule } from './lamp-management-routing.module';
import { AvailableLampsComponent } from './available-lamps/available-lamps.component';
import { LampListComponent } from './lamp-list/lamp-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        LampManagementRoutingModule,
        SharedModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    declarations: [LampManagementComponent, AvailableLampsComponent, LampListComponent]
})
export class LampManagementModule { }

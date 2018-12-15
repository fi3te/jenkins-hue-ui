import { FormsModule } from '@angular/forms';
import { RenameModalComponent } from './../shared/rename-modal/rename-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSettingsComponent } from './team-settings.component';
import { TeamSettingsRoutingModule } from './team-settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SortableModule } from 'ngx-bootstrap/sortable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TeamSettingsRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
    SortableModule.forRoot()
  ],
  declarations: [TeamSettingsComponent],
  entryComponents: [
    RenameModalComponent
  ]
})
export class TeamSettingsModule { }

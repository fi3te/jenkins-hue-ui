import { RenameModalComponent } from './../shared/rename-modal/rename-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSettingsComponent } from './team-settings.component';
import { TeamSettingsRoutingModule } from './team-settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    TeamSettingsRoutingModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  declarations: [TeamSettingsComponent],
  entryComponents: [
    RenameModalComponent
  ]
})
export class TeamSettingsModule { }

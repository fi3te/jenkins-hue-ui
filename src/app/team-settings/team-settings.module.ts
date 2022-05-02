import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSettingsComponent } from './team-settings.component';
import { TeamSettingsRoutingModule } from './team-settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TeamSettingsRoutingModule,
    SharedModule,
    DragDropModule
  ],
  declarations: [TeamSettingsComponent],
  providers: [
    NgbModalConfig,
    NgbModal
  ]
})
export class TeamSettingsModule {
}

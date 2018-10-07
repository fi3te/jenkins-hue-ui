import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSettingsComponent } from './team-settings.component';
import { TeamSettingsRoutingModule } from './team-settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamSettingsRoutingModule
  ],
  declarations: [TeamSettingsComponent]
})
export class TeamSettingsModule { }

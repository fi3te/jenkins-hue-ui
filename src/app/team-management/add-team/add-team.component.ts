import { AlertService } from './../../service/alert.service';
import { TeamService } from './../../service/http/team.service';
import { TeamManagementService } from './../team-management.service';
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent {

  public name: string;

  @ViewChild('teamName', {static: false})
  public teamName: NgModel;

  constructor(
    private teamService: TeamService,
    private teamManagementService: TeamManagementService,
    private alertService: AlertService
  ) { }

  public createTeam(): void {
    if (this.name) {
      this.teamService.create({name: this.name}).subscribe(() => {
        this.teamManagementService.teamCreated();
        this.alertService.info('Team hinzugefügt!');
      });
      this.name = '';
      this.teamName.control.markAsPristine({onlySelf: true});
    }
  }
}

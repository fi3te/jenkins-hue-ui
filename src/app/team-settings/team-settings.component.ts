import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { DTO } from '../generated-dtos.model';
import { RenameModalComponent } from '../shared/rename-modal/rename-modal.component';
import { AlertService } from './../service/alert.service';
import { TeamService } from './../service/http/team.service';

import TeamUsersDTO = DTO.TeamUsersDTO;

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.scss']
})
export class TeamSettingsComponent implements OnInit {

  public teamUsersDTO: TeamUsersDTO;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private alertservice: AlertService
  ) { }

  public ngOnInit(): void {
    this.route.data.subscribe((data: { teamUsersDTO: TeamUsersDTO }) => {
      this.teamUsersDTO = data.teamUsersDTO;
      this.updateScenarioPriorityBackgroundColor();
    });
  }

  public saveScenarioPriority(): void {
    this.teamService.update({ id: this.teamUsersDTO.id, scenarioPriority: this.teamUsersDTO.scenarioPriority }).subscribe(() => {
      this.alertservice.info('Einstellungen gespeichert!');
    });
  }

  public renameTeam(): void {
    const initialState = {
      title: 'Team umbenennen',
      icon: 'cui-people',
      name: this.teamUsersDTO.name
    };

    const bsModalRef: BsModalRef = this.modalService.show(
      RenameModalComponent,
      { initialState }
    );

    const subscription = this.modalService.onHide.subscribe(() => {
      const saved = bsModalRef.content.saved;
      const name = bsModalRef.content.name;
      if (saved && name) {
        this.teamService.rename({ id: this.teamUsersDTO.id, name: name }).subscribe((next) => {
          this.teamUsersDTO.name = next.name;
          this.alertservice.info('Team umbenannt!');
        });
      } else if (saved) {
        this.alertservice.warning('Eingabe ungültig!');
      }
      subscription.unsubscribe();
    });
  }

  private updateScenarioPriorityBackgroundColor(): void {
    for (const scenarioPriority of this.teamUsersDTO.scenarioPriority) {
      const name = scenarioPriority.name;
      const states = name.split('_AFTER_');
      let color1 = 'white';
      let color2 = 'white';

      const blueColor = '#20a8d8'; // old #3c8dbc
      const redColor = '#f86c6b'; // old #dd4b39
      const yellowColor = '#ffc107'; // old #f39c12
      const greenColor = '#4dbd74'; // old #00a65a

      switch (states[0]) {
        case 'BUILDING':
          color1 = blueColor;
          break;
        case 'FAILURE':
          color1 = redColor;
          break;
        case 'UNSTABLE':
          color1 = yellowColor;
          break;
        case 'SUCCESS':
          color1 = greenColor;
          break;
      }
      switch (states[1]) {
        case 'BUILDING':
          color2 = blueColor;
          break;
        case 'FAILURE':
          color2 = redColor;
          break;
        case 'UNSTABLE':
          color2 = yellowColor;
          break;
        case 'SUCCESS':
          color2 = greenColor;
          break;
      }

      scenarioPriority.background = 'linear-gradient(to right, ' + color1 + ' 48%, ' + color2 + ' 52%)';
    }
  }
}

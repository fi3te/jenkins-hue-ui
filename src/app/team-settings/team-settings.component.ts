import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DTO } from '../generated-dtos.model';
import { RenameModalComponent } from '../shared/rename-modal/rename-modal.component';
import { AlertService } from '../service/alert.service';
import { TeamService } from '../service/http/team.service';

import TeamUsersDTO = DTO.TeamUsersDTO;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { modalErrorHandler } from '../shared/util';

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.scss']
})
export class TeamSettingsComponent implements OnInit {

  public teamUsersDTO: TeamUsersDTO;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private alertservice: AlertService
  ) { }

  public ngOnInit(): void {
    this.route.data.subscribe((data: { teamUsersDTO: TeamUsersDTO }) => {
      if (data && data.teamUsersDTO) {
        this.teamUsersDTO = data.teamUsersDTO;
        this.updateScenarioPriorityBackgroundColor();
      }
    });
  }

  public saveScenarioPriority(): void {
    this.teamService.update({ id: this.teamUsersDTO.id, scenarioPriority: this.teamUsersDTO.scenarioPriority }).subscribe(() => {
      this.alertservice.info('Einstellungen gespeichert!');
    });
  }

  public renameTeam(): void {
    const ngbModalRef = this.modalService.open(RenameModalComponent);
    ngbModalRef.componentInstance.title = 'Team umbenennen';
    ngbModalRef.componentInstance.icon = 'cui-people';
    ngbModalRef.componentInstance.name = this.teamUsersDTO.name;
    ngbModalRef.result.then((name?: string) => {
      if (name) {
        this.teamService.rename({ id: this.teamUsersDTO.id, name: name }).subscribe((next) => {
          this.teamUsersDTO.name = next.name;
          this.alertservice.info('Team umbenannt!');
        });
      } else {
        this.alertservice.warning('Eingabe ungültig!');
      }
    }).catch(modalErrorHandler);
  }

  public drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.teamUsersDTO?.scenarioPriority, event.previousIndex, event.currentIndex);
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { LampService } from '../../service/http/lamp.service';
import { SessionService } from '../../service/session.service';
import { RenameModalComponent } from '../../shared/rename-modal/rename-modal.component';
import { DTO } from './../../generated-dtos.model';
import { AlertService } from './../../service/alert.service';
import { LampOwnershipService } from './../lamp-ownership.service';

import TeamLampsDTO = DTO.TeamLampsDTO;
import TeamLampsDTO_LampDTO = DTO.TeamLampsDTO_LampDTO;

@Component({
  selector: 'app-lamp-list',
  templateUrl: './lamp-list.component.html',
  styleUrls: ['./lamp-list.component.scss']
})
export class LampListComponent implements OnInit {
  public teamLamps: TeamLampsDTO_LampDTO[];
  public filteredLamps: TeamLampsDTO_LampDTO[];
  public searchItem = '';
  private teamId: number;

  constructor(
    private sessionService: SessionService,
    private lampService: LampService,
    private alertService: AlertService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private lampOwnershipService: LampOwnershipService
  ) {}

  public ngOnInit(): void {
    this.teamId = this.sessionService.getTeamId();
    this.route.data.subscribe((data: { teamLampsDTO: TeamLampsDTO }) => {
      this.setTeamLamps(data.teamLampsDTO.lamps);
    });
    this.lampOwnershipService.lampTaken$.subscribe(() => {
      this.fetchTeamLamps();
    });
  }

  public filter(): void {
    this.filteredLamps = [];
    const tmp = this.searchItem.toLowerCase();
    for (const lamp of this.teamLamps) {
      if (
        (lamp.name && lamp.name.toLowerCase().indexOf(tmp) > -1) ||
        (lamp.hueUniqueId && lamp.hueUniqueId.toLowerCase().indexOf(tmp) > -1)
      ) {
        this.filteredLamps.push(lamp);
      }
    }
  }

  public renameLamp(lamp: TeamLampsDTO_LampDTO) {
    const initialState = {
      title: 'Lampe umbenennen',
      icon: 'icon-bulb',
      name: lamp.name
    };

    const bsModalRef: BsModalRef = this.modalService.show(
      RenameModalComponent,
      { initialState }
    );

    const subscription = this.modalService.onHide.subscribe(() => {
      const saved = bsModalRef.content.saved;
      const name = bsModalRef.content.name;
      if (saved && name) {
        this.lampService.rename({ id: lamp.id, name: name }).subscribe(() => {
          lamp.name = name;
          this.alertService.info('Lampe umbenannt!');
        });
      } else if (saved) {
        this.alertService.warning('Eingabe ungültig!');
      }
      subscription.unsubscribe();
    });
  }

  public pulseOnce(lamp: TeamLampsDTO_LampDTO) {
    this.lampService.pulseOnce(lamp.hueUniqueId).subscribe();
  }

  public releaseLamp(lamp: TeamLampsDTO_LampDTO) {
    this.lampService.remove(lamp.id).subscribe(() => {
      this.lampOwnershipService.lampReleased();
      this.fetchTeamLamps();
      this.alertService.info('Lampe freigegeben!');
    });
  }

  private fetchTeamLamps(): void {
    this.lampService
      .findAllOfATeam(this.teamId)
      .subscribe((next: TeamLampsDTO) => {
        this.setTeamLamps(next.lamps);
      });
  }

  private setTeamLamps(lamps: TeamLampsDTO_LampDTO[]) {
    this.teamLamps = lamps;
    this.filter();
  }
}

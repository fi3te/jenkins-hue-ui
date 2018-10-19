import { AlertService } from './../service/alert.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DTO } from '../generated-dtos.model';
import { SessionService } from '../service/session.service';
import { LampService } from './../service/http/lamp.service';
import { AddJobsModalComponent } from './add-jobs-modal/add-jobs-modal.component';
import { AddScenarioModalComponent } from './add-scenario-modal/add-scenario-modal.component';

import TeamLampsDTO_LampDTO = DTO.TeamLampsDTO_LampDTO;
import { UniversalService } from '../service/http/universal.service';
import { SimpleEnum } from '../service/model/simple-enum.model';

@Component({
  selector: 'app-build-assignment',
  templateUrl: './build-assignment.component.html',
  styleUrls: ['./build-assignment.component.scss']
})
export class BuildAssignmentComponent implements OnInit {
  public lampDTOs: TeamLampsDTO_LampDTO[];
  public scenarioPriority: SimpleEnum[];

  public test = new Date();

  constructor(
    private modalService: BsModalService,
    private sessionService: SessionService,
    private lampService: LampService,
    private universalService: UniversalService,
    private alertService: AlertService
  ) {}

  public ngOnInit(): void {
    const teamId = this.sessionService.getTeamId();
    this.lampService.findAllOfATeam(teamId).subscribe(next => {
      this.lampDTOs = next.lamps;
      this.scenarioPriority = next.scenarioPriority;
      this.fix();
      this.sortScenarioConfigs();
    });
  }

  public addJobsDemo(): void {
    const initialState = {
      jobNames: []
    };

    const bsModalRef: BsModalRef = this.modalService.show(
      AddJobsModalComponent,
      { initialState }
    );
    // this.bsModalRef.content.closeBtsnName = 'Close';
  }

  public addScenario(lampDTO: TeamLampsDTO_LampDTO): void {
    this.universalService.scenarios().subscribe(next => {
      const scenarios: SimpleEnum[] = next;

      let currentScenarios = [];
      if (lampDTO.buildingConfigs) {
        currentScenarios = currentScenarios.concat(lampDTO.buildingConfigs);
      }
      if (lampDTO.failureConfigs) {
        currentScenarios = currentScenarios.concat(lampDTO.failureConfigs);
      }
      if (lampDTO.unstableConfigs) {
        currentScenarios = currentScenarios.concat(lampDTO.unstableConfigs);
      }
      if (lampDTO.successConfigs) {
        currentScenarios = currentScenarios.concat(lampDTO.successConfigs);
      }

      // remove already selected scenarios
      for (const s of currentScenarios) {
        const index = this.findWithAttr(scenarios, 'name', s.name);
        if (index > -1) {
          scenarios.splice(index, 1);
        }
      }

      if (scenarios.length > 0) {
        this.openAddScenarioDialog(lampDTO, scenarios);
      } else {
        this.alertService.warning('Keine weiteren Szenarios verfügbar!');
      }
    });
  }

  // TODO remove
  private fix(): void {
    for (const lamp of this.lampDTOs) {
      lamp.workingStart = new Date(lamp.workingStart);
      lamp.workingEnd = new Date(lamp.workingEnd);
    }
  }

  private openAddScenarioDialog(
    lampDTO: TeamLampsDTO_LampDTO,
    selectableScenarios: SimpleEnum[]
  ): void {
    // TODO remove
    console.log(selectableScenarios);

    const initialState = {
      scenarios: selectableScenarios
    };

    const bsModalRef: BsModalRef = this.modalService.show(
      AddScenarioModalComponent,
      { initialState }
    );

    // TODO
    // TODO
    // TODO
  }

  private sortScenarioConfigs(): void {
    for (const lamp of this.lampDTOs) {
      if (lamp.buildingConfigs) {
        lamp.buildingConfigs.sort(this.compareScenarioConfigs);
      }
      if (lamp.failureConfigs) {
        lamp.failureConfigs.sort(this.compareScenarioConfigs);
      }
      if (lamp.unstableConfigs) {
        lamp.unstableConfigs.sort(this.compareScenarioConfigs);
      }
      if (lamp.successConfigs) {
        lamp.successConfigs.sort(this.compareScenarioConfigs);
      }
    }
  }

  private compareScenarioConfigs(a, b): number {
    const posA = this.scenarioPriority.indexOf(a.scenario);
    const posB = this.scenarioPriority.indexOf(b.scenario);
    return posA - posB;
  }

  private findWithAttr(array: any[], attr: string, value: any): number {
    for (let i = 0; i < array.length; i++) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }
}

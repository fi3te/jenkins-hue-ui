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
import ScenarioConfigDTO = DTO.ScenarioConfigDTO;
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

      let currentScenarios: ScenarioConfigDTO[] = [];
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
        const index = this.findWithAttr(scenarios, 'name', s.scenario.name);
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
    const initialState = {
      scenarios: selectableScenarios
    };

    const bsModalRef: BsModalRef = this.modalService.show(
      AddScenarioModalComponent,
      { initialState }
    );

    const subscription = this.modalService.onHide.subscribe(() => {
      const selectedScenarios = bsModalRef.content.selectedScenarios;

      if (selectedScenarios) {
        if (!lampDTO.buildingConfigs) {
          lampDTO.buildingConfigs = [];
        }
        if (!lampDTO.failureConfigs) {
          lampDTO.failureConfigs = [];
        }
        if (!lampDTO.unstableConfigs) {
          lampDTO.unstableConfigs = [];
        }
        if (!lampDTO.successConfigs) {
          lampDTO.successConfigs = [];
        }

        for (const s of selectedScenarios) {
          const newScenario = { config: {}, scenario: s };
          if (s.name.startsWith('BUILDING')) {
            lampDTO.buildingConfigs.push(newScenario);
          } else if (s.name.startsWith('FAILURE')) {
            lampDTO.failureConfigs.push(newScenario);
          } else if (s.name.startsWith('UNSTABLE')) {
            lampDTO.unstableConfigs.push(newScenario);
          } else if (s.name.startsWith('SUCCESS')) {
            lampDTO.successConfigs.push(newScenario);
          }
        }
        this.sortScenarioConfigs();
      }

      subscription.unsubscribe();
    });
  }

  private sortScenarioConfigs(): void {
    const compare = (a: ScenarioConfigDTO, b: ScenarioConfigDTO) =>
      this.scenarioPriority.indexOf(a.scenario) - this.scenarioPriority.indexOf(b.scenario);

    for (const lamp of this.lampDTOs) {
      if (lamp.buildingConfigs) {
        lamp.buildingConfigs.sort(compare);
      }
      if (lamp.failureConfigs) {
        lamp.failureConfigs.sort(compare);
      }
      if (lamp.unstableConfigs) {
        lamp.unstableConfigs.sort(compare);
      }
      if (lamp.successConfigs) {
        lamp.successConfigs.sort(compare);
      }
    }
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

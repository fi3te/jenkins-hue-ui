import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DTO } from '../generated-dtos.model';
import { JenkinsService } from '../service/http/jenkins.service';
import { UniversalService } from '../service/http/universal.service';
import { SimpleEnum } from '../service/model/simple-enum.model';
import { SessionService } from '../service/session.service';
import { AlertService } from './../service/alert.service';
import { LampService } from './../service/http/lamp.service';
import { AddJobsModalComponent } from './add-jobs-modal/add-jobs-modal.component';
import { AddScenariosModalComponent } from './add-scenarios-modal/add-scenarios-modal.component';

import TeamLampsDTO_LampDTO = DTO.TeamLampsDTO_LampDTO;
import ScenarioConfigDTO = DTO.ScenarioConfigDTO;
import JenkinsJobNamesDTO_JobDTO = DTO.JenkinsJobNamesDTO_JobDTO;
import LampGroupedScenariosDTO = DTO.LampGroupedScenariosDTO;
import TeamLampsDTO = DTO.TeamLampsDTO;
import LampUpdateDTO = DTO.LampUpdateDTO;

@Component({
  selector: 'app-build-assignment',
  templateUrl: './build-assignment.component.html',
  styleUrls: ['./build-assignment.component.scss']
})
export class BuildAssignmentComponent implements OnInit {
  public lampDTOs: TeamLampsDTO_LampDTO[];
  public scenarioPriority: SimpleEnum[];

  public test = new Date();

  private teamId: number;

  constructor(
    private modalService: BsModalService,
    private sessionService: SessionService,
    private lampService: LampService,
    private universalService: UniversalService,
    private jenkinsService: JenkinsService,
    private alertService: AlertService
  ) {}

  public ngOnInit(): void {
    this.teamId = this.sessionService.getTeamId();
    this.lampService
      .findAllOfATeam(this.teamId)
      .subscribe((next: TeamLampsDTO) => {
        this.lampDTOs = next.lamps;
        this.scenarioPriority = next.scenarioPriority;
        this.fix();
        this.sortScenarioConfigs();
      });
  }

  public addJob(lampDTO: TeamLampsDTO_LampDTO): void {
    const currentJobs = lampDTO.jobs;
    this.jenkinsService.getJenkinsJobNames(currentJobs).subscribe(next => {
      const jobs = next.jobs;
      if (jobs.length) {
        this.openAddJobsModal(lampDTO, jobs);
      } else {
        this.alertService.warning('Keine weiteren Jobs verfügbar!');
      }
    });
  }

  public removeJob(
    lampDTO: TeamLampsDTO_LampDTO,
    job: JenkinsJobNamesDTO_JobDTO
  ) {
    let jobRemoved = false;
    lampDTO.jobs.forEach((value, index) => {
      if (!jobRemoved && value.name === job.name) {
        lampDTO.jobs.splice(index, 1);
        jobRemoved = true;
      }
    });
  }

  public addScenario(lampDTO: TeamLampsDTO_LampDTO): void {
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

    this.universalService
      .scenarios(currentScenarios)
      .subscribe((scenarios: SimpleEnum[]) => {
        if (scenarios.length > 0) {
          this.openAddScenariosModal(lampDTO, scenarios);
        } else {
          this.alertService.warning('Keine weiteren Szenarios verfügbar!');
        }
      });
  }

  public saveLamp(lampDTO: TeamLampsDTO_LampDTO): void {
    const updateDTO: LampUpdateDTO = lampDTO;
    updateDTO.teamId = this.teamId;
    this.lampService.update(updateDTO).subscribe(() => {
      this.alertService.info('Einstellungen gespeichert!');
    });
  }

  public resetLamp(lampDTO: TeamLampsDTO_LampDTO): void {
    this.lampService
      .findOne(lampDTO.id)
      .subscribe((next: LampGroupedScenariosDTO) => {
        lampDTO.name = next.name;
        lampDTO.workingStart = next.workingStart;
        lampDTO.workingEnd = next.workingEnd;
        this.fix();
        lampDTO.jobs = next.jobs;

        lampDTO.buildingConfigs = next.buildingConfigs;
        lampDTO.failureConfigs = next.failureConfigs;
        lampDTO.unstableConfigs = next.unstableConfigs;
        lampDTO.successConfigs = next.successConfigs;

        this.sortScenarioConfigs();
        this.alertService.info('Änderungen verworfen!');
      });
  }

  // TODO remove
  private fix(): void {
    for (const lamp of this.lampDTOs) {
      lamp.workingStart = new Date(lamp.workingStart);
      lamp.workingEnd = new Date(lamp.workingEnd);
    }
  }

  private openAddJobsModal(
    lampDTO: TeamLampsDTO_LampDTO,
    selectableJobs: JenkinsJobNamesDTO_JobDTO[]
  ): void {
    const initialState = {
      jobs: selectableJobs
    };

    const bsModalRef: BsModalRef = this.modalService.show(
      AddJobsModalComponent,
      { initialState }
    );

    const subscription = this.modalService.onHide.subscribe(() => {
      const selectedJobs = bsModalRef.content.selectedJobs;

      if (selectedJobs && selectedJobs.length) {
        if (!lampDTO.jobs || !lampDTO.jobs.length) {
          lampDTO.jobs = selectedJobs;
        } else {
          lampDTO.jobs.push.apply(lampDTO.jobs, selectedJobs);
        }
      }

      subscription.unsubscribe();
    });
  }

  private openAddScenariosModal(
    lampDTO: TeamLampsDTO_LampDTO,
    selectableScenarios: SimpleEnum[]
  ): void {
    const initialState = {
      scenarios: selectableScenarios
    };

    const bsModalRef: BsModalRef = this.modalService.show(
      AddScenariosModalComponent,
      { initialState }
    );

    const subscription = this.modalService.onHide.subscribe(() => {
      const selectedScenarios = bsModalRef.content.selectedScenarios;

      if (selectedScenarios && selectedScenarios.length) {
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
      this.scenarioPriority.indexOf(a.scenario) -
      this.scenarioPriority.indexOf(b.scenario);

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
}

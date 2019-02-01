import { AccordionStateService } from './accordion-state.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { DTO } from '../generated-dtos.model';
import { JenkinsService } from '../service/http/jenkins.service';
import { UniversalService } from '../service/http/universal.service';
import { SimpleEnum } from '../service/model/simple-enum.model';
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
import { ActivatedRoute } from '@angular/router';
import { Animations } from '../shared/animations';
import { NgbTimeNumberAdapter } from './ngb-time-number-adapter';
import { NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-build-assignment',
  templateUrl: './build-assignment.component.html',
  styleUrls: ['./build-assignment.component.scss'],
  animations: [ Animations.slideInOut ],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeNumberAdapter}]
})
export class BuildAssignmentComponent implements OnInit {

  public lampDTOs: TeamLampsDTO_LampDTO[];
  public scenarioPriority: SimpleEnum[];
  public loading: boolean;

  constructor(
    private modalService: BsModalService,
    private lampService: LampService,
    private universalService: UniversalService,
    private jenkinsService: JenkinsService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    public accordionStateService: AccordionStateService<string>
  ) {}

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data: { teamLampsDTO: TeamLampsDTO }) => {
        this.lampDTOs = data.teamLampsDTO.lamps;
        this.scenarioPriority = data.teamLampsDTO.scenarioPriority;
        this.sortScenarioConfigs();
      }
    );
  }

  public addJob(lampDTO: TeamLampsDTO_LampDTO): void {
    const currentJobs = lampDTO.jobs;
    this.loading = true;
    this.jenkinsService.getJenkinsJobNames(currentJobs).subscribe(next => {
      const jobs = next.jobs;
      if (jobs.length) {
        this.openAddJobsModal(lampDTO, jobs);
      } else {
        this.alertService.warning('Keine weiteren Jobs verfügbar!');
      }
      this.loading = false;
    }, () => {
      this.loading = false;
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

    this.loading = true;
    this.universalService
      .scenarios(currentScenarios)
      .subscribe((scenarios: SimpleEnum[]) => {
        if (scenarios.length > 0) {
          this.openAddScenariosModal(lampDTO, scenarios);
        } else {
          this.alertService.warning('Keine weiteren Szenarios verfügbar!');
        }
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  public saveLamp(lampDTO: TeamLampsDTO_LampDTO): void {
    const updateDTO: LampUpdateDTO = lampDTO;
    this.loading = true;
    this.lampService.update(updateDTO).subscribe(() => {
      this.alertService.info('Einstellungen gespeichert!');
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  public resetLamp(lampDTO: TeamLampsDTO_LampDTO): void {
    this.loading = true;
    this.lampService
      .findOne(lampDTO.id)
      .subscribe((next: LampGroupedScenariosDTO) => {
        lampDTO.name = next.name;
        lampDTO.workingStart = next.workingStart;
        lampDTO.workingEnd = next.workingEnd;
        lampDTO.jobs = next.jobs;

        lampDTO.buildingConfigs = next.buildingConfigs;
        lampDTO.failureConfigs = next.failureConfigs;
        lampDTO.unstableConfigs = next.unstableConfigs;
        lampDTO.successConfigs = next.successConfigs;

        this.sortScenarioConfigs();
        this.alertService.info('Änderungen verworfen!');
        this.loading = false;
      }, () => {
        this.loading = false;
      });
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
          const newScenario: ScenarioConfigDTO = { scenario: s };
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

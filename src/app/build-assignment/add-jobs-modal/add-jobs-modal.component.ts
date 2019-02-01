import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { DTO } from '../../generated-dtos.model';

import JenkinsJobNamesDTO_JobDTO = DTO.JenkinsJobNamesDTO_JobDTO;

@Component({
  selector: 'app-add-jobs-modal',
  templateUrl: './add-jobs-modal.component.html',
  styleUrls: ['./add-jobs-modal.component.scss']
})
export class AddJobsModalComponent {
  public jobs: JenkinsJobNamesDTO_JobDTO[];
  public selectedJobs: JenkinsJobNamesDTO_JobDTO[];

  constructor(public bsModalRef: BsModalRef) {}

  public cancel(): void {
    this.selectedJobs = [];
    this.bsModalRef.hide();
  }

  public addJobs(): void {
    this.bsModalRef.hide();
  }
}

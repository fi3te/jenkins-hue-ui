import { Component } from '@angular/core';

import { DTO } from '../../generated-dtos.model';

import JenkinsJobNamesDTO_JobDTO = DTO.JenkinsJobNamesDTO_JobDTO;
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-jobs-modal',
  templateUrl: './add-jobs-modal.component.html',
  styleUrls: ['./add-jobs-modal.component.scss']
})
export class AddJobsModalComponent {
  public jobs: JenkinsJobNamesDTO_JobDTO[];
  public selectedJobs: JenkinsJobNamesDTO_JobDTO[];

  constructor(private activeModal: NgbActiveModal) {
  }

  public cancel(): void {
    this.activeModal.dismiss();
  }

  public addJobs(): void {
    this.activeModal.close(this.selectedJobs);
  }
}

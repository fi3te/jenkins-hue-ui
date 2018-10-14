import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DTO } from '../../generated-dtos.model';
import JenkinsJobNamesDTO = DTO.JenkinsJobNamesDTO;

@Component({
  selector: 'app-add-jobs-modal',
  templateUrl: './add-jobs-modal.component.html',
  styleUrls: ['./add-jobs-modal.component.scss']
})
export class AddJobsModalComponent implements OnInit {

  public jobNames: JenkinsJobNamesDTO;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}

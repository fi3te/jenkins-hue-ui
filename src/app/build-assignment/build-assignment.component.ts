import { AddJobsModalComponent } from './add-jobs-modal/add-jobs-modal.component';
import { Component, OnInit } from '@angular/core';
import { DTO } from '../generated-dtos.model';
import LampDTO = DTO.LampDTO;
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-build-assignment',
  templateUrl: './build-assignment.component.html',
  styleUrls: ['./build-assignment.component.scss']
})
export class BuildAssignmentComponent implements OnInit {

  public lampDTOs: LampDTO[];

  constructor(private modalService: BsModalService) { }

  public ngOnInit(): void {
    const initialState = {
      jobNames: []
    };

    const bsModalRef: BsModalRef = this.modalService.show(AddJobsModalComponent, {initialState});

    // this.bsModalRef.content.closeBtsnName = 'Close';
  }
}

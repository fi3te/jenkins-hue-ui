import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FoundBridgesModalComponent } from './found-bridges-modal/found-bridges-modal.component';

@Component({
  selector: 'app-bridge-management',
  templateUrl: './bridge-management.component.html',
  styleUrls: ['./bridge-management.component.scss']
})
export class BridgeManagementComponent implements OnInit {

  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public ngOnInit(): void {
  }

  public openModal(): void {
    const initialState = {
      bridges: [],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(FoundBridgesModalComponent, {initialState});

    // this.bsModalRef.content.closeBtsnName = 'Close';
  }

}

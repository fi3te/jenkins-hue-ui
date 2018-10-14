import { RenameModalComponent } from './../shared/rename-modal/rename-modal.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-lamp-management',
  templateUrl: './lamp-management.component.html',
  styleUrls: ['./lamp-management.component.scss']
})
export class LampManagementComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  public ngOnInit(): void {
    const initialState = {
      title: 'Modal with component',
      icon: 'users'
    };

    const bsModalRef: BsModalRef = this.modalService.show(RenameModalComponent, {initialState});

    // this.bsModalRef.content.closeBtsnName = 'Close';
  }

}

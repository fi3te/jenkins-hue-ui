import { ChangeRolesModalComponent } from './../shared/change-roles-modal/change-roles-modal.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RenameModalComponent } from '../shared/rename-modal/rename-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  public ngOnInit(): void {
    const initialState = {
      title: 'Modal with component',
      icon: 'users'
    };

    const bsModalRef: BsModalRef = this.modalService.show(RenameModalComponent, {initialState});

    // this.bsModalRef.content.closeBtsnName = 'Close';

    this.changeRolesDemo();
  }

  public changeRolesDemo(): void {
    const initialState = {
      roles: []
    };

    const bsModalRef: BsModalRef = this.modalService.show(ChangeRolesModalComponent, {initialState});

    // this.bsModalRef.content.closeBtsnName = 'Close';
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/http/user.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ChangeRolesModalComponent } from '../shared/change-roles-modal/change-roles-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private userService: UserService, private modalService: BsModalService) { }

  public ngOnInit(): void {
    const initialState = {
      roles: []
    };

    const bsModalRef: BsModalRef = this.modalService.show(ChangeRolesModalComponent, {initialState});
  }

}

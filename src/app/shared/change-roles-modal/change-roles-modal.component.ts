import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-change-roles-modal',
  templateUrl: './change-roles-modal.component.html',
  styleUrls: ['./change-roles-modal.component.scss']
})
export class ChangeRolesModalComponent implements OnInit {

  public roles: any[];

  constructor(public bsModalRef: BsModalRef) { }

  public ngOnInit(): void {
  }

}

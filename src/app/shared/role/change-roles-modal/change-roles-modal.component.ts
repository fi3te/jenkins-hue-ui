import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SimpleEnum } from '../../../service/model/simple-enum.model';

@Component({
  selector: 'app-change-roles-modal',
  templateUrl: './change-roles-modal.component.html',
  styleUrls: ['./change-roles-modal.component.scss']
})
export class ChangeRolesModalComponent {

  public roles: SimpleEnum[];
  public selectedRoles: SimpleEnum[];
  public saved: boolean;

  constructor(public bsModalRef: BsModalRef) {}

  public cancel(): void {
    this.bsModalRef.hide();
  }

  public save(): void {
    this.saved = true;
    this.bsModalRef.hide();
  }
}

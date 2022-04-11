import { Component } from '@angular/core';
import { SimpleEnum } from '../../../service/model/simple-enum.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-roles-modal',
  templateUrl: './change-roles-modal.component.html',
  styleUrls: ['./change-roles-modal.component.scss']
})
export class ChangeRolesModalComponent {

  public roles: SimpleEnum[];
  public selectedRoles: SimpleEnum[];
  public saved: boolean;

  constructor(private activeModal: NgbActiveModal) {
  }

  public cancel(): void {
    this.activeModal.dismiss();
  }

  public save(): void {
    this.activeModal.close(this.selectedRoles);
  }
}

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rename-modal',
  templateUrl: './rename-modal.component.html',
  styleUrls: ['./rename-modal.component.scss']
})
export class RenameModalComponent {

  public title: string;
  public icon: string;
  public name: string;

  constructor(private activeModal: NgbActiveModal) { }

  public cancel(): void {
    this.activeModal.dismiss();
  }

  public save(): void {
    this.activeModal.close(this.name);
  }
}

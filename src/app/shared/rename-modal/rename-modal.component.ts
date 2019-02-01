import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rename-modal',
  templateUrl: './rename-modal.component.html',
  styleUrls: ['./rename-modal.component.scss']
})
export class RenameModalComponent {

  public title: string;
  public icon: string;
  public name: string;
  public saved: boolean;

  constructor(public bsModalRef: BsModalRef) { }

  public cancel(): void {
    this.bsModalRef.hide();
  }

  public save(): void {
    this.saved = true;
    this.bsModalRef.hide();
  }
}

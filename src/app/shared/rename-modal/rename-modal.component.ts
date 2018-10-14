import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-rename-modal',
  templateUrl: './rename-modal.component.html',
  styleUrls: ['./rename-modal.component.scss']
})
export class RenameModalComponent implements OnInit {

  public title: string;
  public icon: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { RenameModalComponent } from '../shared/rename-modal/rename-modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.scss']
})
export class TeamSettingsComponent implements OnInit {

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

import { Component } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import FoundBridgeDTO = DTO.FoundBridgeDTO;

@Component({
  selector: 'app-found-bridges-modal',
  templateUrl: './found-bridges-modal.component.html',
  styleUrls: ['./found-bridges-modal.component.scss']
})
export class FoundBridgesModalComponent {

  public bridges: FoundBridgeDTO[] = [];

  public selectedBridge: FoundBridgeDTO;

  constructor(private activeModal: NgbActiveModal) {
  }

  public addBridge(bridge: FoundBridgeDTO) {
    this.selectedBridge = bridge;
    this.activeModal.close(this.selectedBridge);
  }

  public cancel(): void {
    this.activeModal.dismiss();
  }
}

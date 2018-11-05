import { Component } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import FoundBridgeDTO = DTO.FoundBridgeDTO;
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-found-bridges-modal',
  templateUrl: './found-bridges-modal.component.html',
  styleUrls: ['./found-bridges-modal.component.scss']
})
export class FoundBridgesModalComponent {

  public bridges: FoundBridgeDTO[] = [];

  public selectedBridge: FoundBridgeDTO;

  constructor(public bsModalRef: BsModalRef) { }

  public addBridge(bridge: FoundBridgeDTO) {
    this.selectedBridge = bridge;
    this.bsModalRef.hide();
  }

  public cancel(): void {
    this.bsModalRef.hide();
  }
}

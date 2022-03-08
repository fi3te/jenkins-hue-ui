import { BridgeService } from './../../service/http/bridge.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import BridgeCreateDTO = DTO.BridgeCreateDTO;
import FoundBridgeDTO = DTO.FoundBridgeDTO;
import { SessionService } from '../../service/session.service';
import { NgModel } from '@angular/forms';
import { BridgeOwnershipService } from '../bridge-ownership.service';
import { AlertService } from '../../service/alert.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FoundBridgesModalComponent } from '../found-bridges-modal/found-bridges-modal.component';

@Component({
  selector: 'app-add-bridge',
  templateUrl: './add-bridge.component.html',
  styleUrls: ['./add-bridge.component.scss']
})
export class AddBridgeComponent implements OnInit {
  public loadingBridges: boolean;

  public ip: string;

  public ipPattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

  @ViewChild('bridgeIp', {static: false})
  public bridgeIp: NgModel;

  private userId: number;

  constructor(
    private bridgeService: BridgeService,
    private sessionService: SessionService,
    private bridgeOwnershipService: BridgeOwnershipService,
    private alertService: AlertService,
    private modalService: BsModalService
  ) {}

  public ngOnInit(): void {
    this.userId = this.sessionService.getUserId();
  }

  public createBridge(): void {
    if (this.ip && this.ipPattern.test(this.ip)) {
      this.createBridgeFormless(this.ip);
      this.resetForm();
    }
  }

  public searchForBridges(): void {
    this.bridgeService.findAvailable().subscribe((next: FoundBridgeDTO[]) => {
      const initialState = {
        bridges: next
      };

      const bsModalRef: BsModalRef = this.modalService.show(
        FoundBridgesModalComponent,
        { initialState, class: 'modal-lg' }
      );

      const subscription = this.modalService.onHide.subscribe(() => {
        const selectedBridge: FoundBridgeDTO = bsModalRef.content.selectedBridge;
        if (selectedBridge) {
          this.createBridgeFormless(selectedBridge.internalipaddress);
        }
        subscription.unsubscribe();
      });
    });
  }

  private createBridgeFormless(ip: string): void {
    const bridgeCreateDTO: BridgeCreateDTO = {
      ip: ip,
      userId: this.userId
    };
    this.bridgeService.create(bridgeCreateDTO).subscribe(next => {
      this.bridgeOwnershipService.bridgeCreated();
      this.alertService.info('Bridge hinzugefügt!');
    });
  }

  private resetForm(): void {
    this.ip = '';
    this.bridgeIp.control.markAsPristine({onlySelf: true});
  }
}

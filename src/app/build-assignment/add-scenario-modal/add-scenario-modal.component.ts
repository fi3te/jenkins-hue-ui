import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SimpleEnum } from '../../service/model/simple-enum.model';

@Component({
  selector: 'app-add-scenario-modal',
  templateUrl: './add-scenario-modal.component.html',
  styleUrls: ['./add-scenario-modal.component.scss']
})
export class AddScenarioModalComponent {

  public scenarios: SimpleEnum[];
  public selectedScenarios: SimpleEnum[];

  constructor(public bsModalRef: BsModalRef) { }

  public cancel(): void {
    this.selectedScenarios = [];
    this.bsModalRef.hide();
  }

  public addScenarios(): void {
    this.bsModalRef.hide();
  }

}

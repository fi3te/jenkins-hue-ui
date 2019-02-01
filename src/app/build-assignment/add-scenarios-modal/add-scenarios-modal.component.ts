import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SimpleEnum } from '../../service/model/simple-enum.model';

@Component({
  selector: 'app-add-scenarios-modal',
  templateUrl: './add-scenarios-modal.component.html',
  styleUrls: ['./add-scenarios-modal.component.scss']
})
export class AddScenariosModalComponent {

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

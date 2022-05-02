import { Component } from '@angular/core';
import { SimpleEnum } from '../../service/model/simple-enum.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-scenarios-modal',
  templateUrl: './add-scenarios-modal.component.html',
  styleUrls: ['./add-scenarios-modal.component.scss']
})
export class AddScenariosModalComponent {

  public scenarios: SimpleEnum[];
  public selectedScenarios: SimpleEnum[];

  constructor(private activeModal: NgbActiveModal) {
  }

  public cancel(): void {
    this.activeModal.dismiss();
  }

  public addScenarios(): void {
    this.activeModal.close(this.selectedScenarios);
  }
}

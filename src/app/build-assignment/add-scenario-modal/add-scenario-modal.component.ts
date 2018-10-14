import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add-scenario-modal',
  templateUrl: './add-scenario-modal.component.html',
  styleUrls: ['./add-scenario-modal.component.scss']
})
export class AddScenarioModalComponent implements OnInit {

  public scenarios: any[];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}

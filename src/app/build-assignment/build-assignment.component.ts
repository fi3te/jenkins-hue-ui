import { Component, OnInit } from '@angular/core';
import { DTO } from '../generated-dtos.model';
import LampDTO = DTO.LampDTO;

@Component({
  selector: 'app-build-assignment',
  templateUrl: './build-assignment.component.html',
  styleUrls: ['./build-assignment.component.scss']
})
export class BuildAssignmentComponent implements OnInit {

  public lampDTOs: LampDTO[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import LampHueDTO = DTO.LampHueDTO;

@Component({
  selector: 'app-available-lamps',
  templateUrl: './available-lamps.component.html',
  styleUrls: ['./available-lamps.component.scss']
})
export class AvailableLampsComponent implements OnInit {

  public availableLamps: LampHueDTO[];
  public isRefreshing: boolean;
  public isTaking: boolean;

  constructor() { }

  ngOnInit() {
  }

  public refresh(): void {
    // TODO
  }

  public pulseOnce(lamp: LampHueDTO): void {
    // TODO
  }

  public takeLamp(lamp: LampHueDTO): void {
    // TODO
  }

}

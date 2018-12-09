import { AlertService } from './../service/alert.service';
import { LampService } from './../service/http/lamp.service';
import { DTO } from './../generated-dtos.model';
import { Component, OnInit } from '@angular/core';

import LampTestDTO = DTO.LampTestDTO;
import LampNameDTO = DTO.LampNameDTO;
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-color-test',
  templateUrl: './color-test.component.html',
  styleUrls: ['./color-test.component.scss']
})
export class ColorTestComponent implements OnInit {

  public lamps: LampNameDTO[];
  public lampTest: LampTestDTO = {
    scenarioConfig: {
      lampOn: true,
      onetimePulsationEnabled: true,
      onetimePulsationColorChangeEnabled: true,
      onetimePulsationColorHex: '#F00',
      colorChangeEnabled: true,
      colorHex: '#0F0',
      brightnessChangeEnabled: true,
      brightness: 254
    }
  };

  constructor(
    private lampService: LampService,
    private sessionService: SessionService,
    private alertService: AlertService
  ) { }

  public ngOnInit(): void {
    const teamId = this.sessionService.getTeamId();
    this.lampService.findAllLampNamesOfATeam(teamId).subscribe((next) => {
      this.lamps = next;
    });
  }

  public testScenario(): void {
    this.lampService.testScenario(this.lampTest).subscribe(() => {
      this.alertService.info('Lampe(n) getestet!');
    });
  }

  public turnLampsOff(): void {
    this.lampService.turnOff({lamps: this.lampTest.lamps}).subscribe(() => {
      this.alertService.info('Lampe(n) ausgeschaltet!');
    });
  }

}

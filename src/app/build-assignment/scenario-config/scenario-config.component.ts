import { Component, OnInit, Input } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import ScenarioConfigDTO = DTO.ScenarioConfigDTO;
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-scenario-config',
  templateUrl: './scenario-config.component.html',
  styleUrls: ['./scenario-config.component.scss']
})
export class ScenarioConfigComponent implements OnInit {

  @Input()
  public scenarioConfig: ScenarioConfigDTO;

  public sliderOptions: Options = {
    floor: 1,
    ceil: 254
  };

  constructor() { }

  public ngOnInit(): void {
  }

}

import { Component, Input } from '@angular/core';

import { DTO } from './../../generated-dtos.model';

import ScenarioConfigDTO = DTO.ScenarioConfigDTO;
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-scenario-config-settings',
  templateUrl: './scenario-config-settings.component.html',
  styleUrls: [
    '../../../scss/local/slider.scss',
    './scenario-config-settings.component.scss'
  ]
})
export class ScenarioConfigSettingsComponent {

  @Input()
  public scenarioConfig: ScenarioConfigDTO;

  public sliderOptions: Options = {
    floor: 1,
    ceil: 254,
    hideLimitLabels: true,
    hidePointerLabels: true,
    showSelectionBar: true
  };
}

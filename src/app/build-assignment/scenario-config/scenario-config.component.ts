import { Component, Input, EventEmitter, Output } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import ScenarioConfigDTO = DTO.ScenarioConfigDTO;
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-scenario-config',
  templateUrl: './scenario-config.component.html',
  styleUrls: [
    '../../../scss/local/slider.scss',
    './scenario-config.component.scss'
  ]
})
export class ScenarioConfigComponent {
  @Input()
  public scenarioConfig: ScenarioConfigDTO;

  @Output()
  public remove = new EventEmitter<ScenarioConfigDTO>();

  public sliderOptions: Options = {
    floor: 1,
    ceil: 254,
    hideLimitLabels: true,
    hidePointerLabels: true,
    showSelectionBar: true
  };

  public removeScenarioConfig(): void {
    this.remove.emit(this.scenarioConfig);
  }
}

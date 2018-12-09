import { Component, Input, EventEmitter, Output } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import ScenarioConfigDTO = DTO.ScenarioConfigDTO;

@Component({
  selector: 'app-scenario-config',
  templateUrl: './scenario-config.component.html',
  styleUrls: ['./scenario-config.component.scss']
})
export class ScenarioConfigComponent {
  @Input()
  public scenarioConfig: ScenarioConfigDTO;

  @Output()
  public remove = new EventEmitter<ScenarioConfigDTO>();

  public removeScenarioConfig(): void {
    this.remove.emit(this.scenarioConfig);
  }
}

import { Component, Input } from '@angular/core';

import { DTO } from './../../generated-dtos.model';

import ScenarioConfigDTO = DTO.ScenarioConfigDTO;

@Component({
  selector: 'app-scenario-config-settings',
  templateUrl: './scenario-config-settings.component.html',
  styleUrls: ['./scenario-config-settings.component.scss']
})
export class ScenarioConfigSettingsComponent {

  @Input()
  public scenarioConfig: ScenarioConfigDTO;

  public checkOnetimePulsationColor(): void {
    if (this.scenarioConfig && this.scenarioConfig.onetimePulsationColorChangeEnabled && !this.scenarioConfig.onetimePulsationColorHex) {
      this.scenarioConfig.onetimePulsationColorHex = '#ffffff';
    }
  }

  public checkColor(): void {
    if (this.scenarioConfig && this.scenarioConfig.colorChangeEnabled && !this.scenarioConfig.colorHex) {
      this.scenarioConfig.colorHex = '#ffffff';
    }
  }

  public checkBrightness(): void {
    if (this.scenarioConfig && this.scenarioConfig.brightnessChangeEnabled && !this.scenarioConfig.brightness) {
      this.scenarioConfig.brightness = 254;
    }
  }
}

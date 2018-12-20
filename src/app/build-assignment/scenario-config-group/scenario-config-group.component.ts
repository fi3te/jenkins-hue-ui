import { Animations } from './../../shared/animations';
import { Component, Input } from '@angular/core';

import { DTO } from '../../generated-dtos.model';

import ScenarioConfigDTO = DTO.ScenarioConfigDTO;

@Component({
  selector: 'app-scenario-config-group',
  templateUrl: './scenario-config-group.component.html',
  styleUrls: ['./scenario-config-group.component.scss'],
  animations: [ Animations.slideInOut ]
})
export class ScenarioConfigGroupComponent {
  @Input()
  public name: string;

  @Input()
  public buttonColor: string;

  @Input()
  public configs: ScenarioConfigDTO[];

  public collapsed = true;

  public removeScenarioConfig(event: ScenarioConfigDTO) {
    const index = this.configs.indexOf(event);
    if (index > -1) {
      this.configs.splice(index, 1);
    }
  }

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }
}

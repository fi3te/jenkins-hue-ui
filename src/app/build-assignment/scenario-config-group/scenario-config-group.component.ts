import { Component, Input } from '@angular/core';

import { DTO } from '../../generated-dtos.model';

import ScenarioConfigDTO = DTO.ScenarioConfigDTO;

@Component({
  selector: 'app-scenario-config-group',
  templateUrl: './scenario-config-group.component.html',
  styleUrls: ['./scenario-config-group.component.scss']
})
export class ScenarioConfigGroupComponent {
  @Input()
  public name: string;

  @Input()
  public buttonColor: string;

  @Input()
  public configs: ScenarioConfigDTO[];
}

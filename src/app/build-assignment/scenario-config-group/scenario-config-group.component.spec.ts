import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { ScenarioConfigSettingsComponent } from './../../shared/scenario-config-settings/scenario-config-settings.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioConfigGroupComponent } from './scenario-config-group.component';
import { ScenarioConfigComponent } from '../scenario-config/scenario-config.component';
import { RemoveButtonComponent } from '../remove-button/remove-button.component';
import { SliderComponent } from '../../shared/scenario-config-settings/slider/slider.component';

describe('ScenarioConfigGroupComponent', () => {
  let component: ScenarioConfigGroupComponent;
  let fixture: ComponentFixture<ScenarioConfigGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScenarioConfigGroupComponent,
        ScenarioConfigComponent,
        ScenarioConfigSettingsComponent,
        RemoveButtonComponent,
        SliderComponent
      ],
      imports: [ FormsModule, ColorPickerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioConfigGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

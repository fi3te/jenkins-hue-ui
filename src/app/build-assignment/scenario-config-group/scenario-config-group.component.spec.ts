import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { ScenarioConfigSettingsComponent } from './../../shared/scenario-config-settings/scenario-config-settings.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioConfigGroupComponent } from './scenario-config-group.component';
import { ScenarioConfigComponent } from '../scenario-config/scenario-config.component';
import { RemoveButtonComponent } from '../remove-button/remove-button.component';
import { Ng5SliderModule } from 'ng5-slider';

describe('ScenarioConfigGroupComponent', () => {
  let component: ScenarioConfigGroupComponent;
  let fixture: ComponentFixture<ScenarioConfigGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioConfigGroupComponent, ScenarioConfigComponent, ScenarioConfigSettingsComponent, RemoveButtonComponent ],
      imports: [ FormsModule, ColorPickerModule, Ng5SliderModule ]
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

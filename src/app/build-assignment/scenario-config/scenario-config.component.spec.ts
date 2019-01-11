import { Ng5SliderModule } from 'ng5-slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { ScenarioConfigSettingsComponent } from './../../shared/scenario-config-settings/scenario-config-settings.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioConfigComponent } from './scenario-config.component';
import { RemoveButtonComponent } from '../remove-button/remove-button.component';

describe('ScenarioConfigComponent', () => {
  let component: ScenarioConfigComponent;
  let fixture: ComponentFixture<ScenarioConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioConfigComponent, RemoveButtonComponent, ScenarioConfigSettingsComponent ],
      imports: [ FormsModule, ColorPickerModule, Ng5SliderModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

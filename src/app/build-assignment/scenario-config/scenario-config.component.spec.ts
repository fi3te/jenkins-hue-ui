import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { ScenarioConfigSettingsComponent } from './../../shared/scenario-config-settings/scenario-config-settings.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScenarioConfigComponent } from './scenario-config.component';
import { RemoveButtonComponent } from '../remove-button/remove-button.component';
import { SliderComponent } from '../../shared/scenario-config-settings/slider/slider.component';

describe('ScenarioConfigComponent', () => {
  let component: ScenarioConfigComponent;
  let fixture: ComponentFixture<ScenarioConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioConfigComponent, RemoveButtonComponent, ScenarioConfigSettingsComponent, SliderComponent ],
      imports: [ FormsModule, ColorPickerModule ]
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

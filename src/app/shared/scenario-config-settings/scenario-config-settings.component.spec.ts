import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioConfigSettingsComponent } from './scenario-config-settings.component';
import { SliderComponent } from './slider/slider.component';

describe('ScenarioConfigSettingsComponent', () => {
  let component: ScenarioConfigSettingsComponent;
  let fixture: ComponentFixture<ScenarioConfigSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioConfigSettingsComponent, SliderComponent ],
      imports: [ FormsModule, ColorPickerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioConfigSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

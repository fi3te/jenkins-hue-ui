import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScenarioConfigSettingsComponent } from './scenario-config-settings.component';
import { SliderComponent } from './slider/slider.component';

describe('ScenarioConfigSettingsComponent', () => {
  let component: ScenarioConfigSettingsComponent;
  let fixture: ComponentFixture<ScenarioConfigSettingsComponent>;

  beforeEach(waitForAsync(() => {
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

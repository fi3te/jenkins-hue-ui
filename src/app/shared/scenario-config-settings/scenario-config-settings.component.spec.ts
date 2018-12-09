import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioConfigSettingsComponent } from './scenario-config-settings.component';

describe('ScenarioConfigSettingsComponent', () => {
  let component: ScenarioConfigSettingsComponent;
  let fixture: ComponentFixture<ScenarioConfigSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioConfigSettingsComponent ]
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

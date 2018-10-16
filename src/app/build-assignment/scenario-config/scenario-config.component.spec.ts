import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioConfigComponent } from './scenario-config.component';

describe('ScenarioConfigComponent', () => {
  let component: ScenarioConfigComponent;
  let fixture: ComponentFixture<ScenarioConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioConfigComponent ]
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

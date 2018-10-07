import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSettingsComponent } from './team-settings.component';

describe('TeamSettingsComponent', () => {
  let component: TeamSettingsComponent;
  let fixture: ComponentFixture<TeamSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampManagementComponent } from './lamp-management.component';

describe('LampManagementComponent', () => {
  let component: LampManagementComponent;
  let fixture: ComponentFixture<LampManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

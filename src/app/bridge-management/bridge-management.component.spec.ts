import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeManagementComponent } from './bridge-management.component';

describe('BridgeManagementComponent', () => {
  let component: BridgeManagementComponent;
  let fixture: ComponentFixture<BridgeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

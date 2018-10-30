import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBridgeComponent } from './add-bridge.component';

describe('AddBridgeComponent', () => {
  let component: AddBridgeComponent;
  let fixture: ComponentFixture<AddBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

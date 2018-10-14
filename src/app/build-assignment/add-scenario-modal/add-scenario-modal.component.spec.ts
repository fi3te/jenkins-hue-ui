import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScenarioModalComponent } from './add-scenario-modal.component';

describe('AddScenarioModalComponent', () => {
  let component: AddScenarioModalComponent;
  let fixture: ComponentFixture<AddScenarioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScenarioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScenarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

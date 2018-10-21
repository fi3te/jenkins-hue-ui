import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScenariosModalComponent } from './add-scenarios-modal.component';

describe('AddScenariosModalComponent', () => {
  let component: AddScenariosModalComponent;
  let fixture: ComponentFixture<AddScenariosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScenariosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScenariosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

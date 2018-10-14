import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobsModalComponent } from './add-jobs-modal.component';

describe('AddJobsModalComponent', () => {
  let component: AddJobsModalComponent;
  let fixture: ComponentFixture<AddJobsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

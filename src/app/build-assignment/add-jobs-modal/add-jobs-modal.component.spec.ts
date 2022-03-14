import { BsModalRef } from 'ngx-bootstrap/modal';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddJobsModalComponent } from './add-jobs-modal.component';
import { ModalHeaderComponent } from '../../shared/modal-building-block/modal-header/modal-header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

describe('AddJobsModalComponent', () => {
  let component: AddJobsModalComponent;
  let fixture: ComponentFixture<AddJobsModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobsModalComponent, ModalHeaderComponent ],
      imports: [ FormsModule, NgSelectModule ],
      providers: [ BsModalRef ]
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

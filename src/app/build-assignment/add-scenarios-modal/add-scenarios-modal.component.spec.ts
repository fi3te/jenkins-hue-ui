import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScenariosModalComponent } from './add-scenarios-modal.component';
import { ModalHeaderComponent } from '../../shared/modal-building-block/modal-header/modal-header.component';
import { FormsModule } from '@angular/forms';

describe('AddScenariosModalComponent', () => {
  let component: AddScenariosModalComponent;
  let fixture: ComponentFixture<AddScenariosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScenariosModalComponent, ModalHeaderComponent ],
      imports: [ FormsModule, NgSelectModule ],
      providers: [ BsModalRef ]
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

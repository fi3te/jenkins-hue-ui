import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScenariosModalComponent } from './add-scenarios-modal.component';
import { ModalHeaderComponent } from '../../shared/modal-building-block/modal-header/modal-header.component';
import { Ng5SliderModule } from 'ng5-slider';
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

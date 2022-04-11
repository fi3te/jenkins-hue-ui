import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddScenariosModalComponent } from './add-scenarios-modal.component';
import { ModalHeaderComponent } from '../../shared/modal-building-block/modal-header/modal-header.component';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('AddScenariosModalComponent', () => {
  let component: AddScenariosModalComponent;
  let fixture: ComponentFixture<AddScenariosModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScenariosModalComponent, ModalHeaderComponent ],
      imports: [ FormsModule, NgSelectModule ],
      providers: [ NgbActiveModal ]
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

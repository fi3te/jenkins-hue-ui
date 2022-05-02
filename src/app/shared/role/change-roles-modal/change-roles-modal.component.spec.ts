import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangeRolesModalComponent } from './change-roles-modal.component';
import { ModalHeaderComponent } from '../../modal-building-block/modal-header/modal-header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ChangeRolesModalComponent', () => {
  let component: ChangeRolesModalComponent;
  let fixture: ComponentFixture<ChangeRolesModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeRolesModalComponent,
        ModalHeaderComponent
      ],
      imports: [
        FormsModule,
        NgSelectModule
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

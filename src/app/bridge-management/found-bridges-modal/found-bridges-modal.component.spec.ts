import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundBridgesModalComponent } from './found-bridges-modal.component';
import { ModalHeaderComponent } from '../../shared/modal-building-block/modal-header/modal-header.component';

describe('FoundBridgesModalComponent', () => {
  let component: FoundBridgesModalComponent;
  let fixture: ComponentFixture<FoundBridgesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundBridgesModalComponent, ModalHeaderComponent ],
      providers: [ BsModalRef ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundBridgesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

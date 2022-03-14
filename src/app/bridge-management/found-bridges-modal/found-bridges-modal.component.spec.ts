import { BsModalRef } from 'ngx-bootstrap/modal';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FoundBridgesModalComponent } from './found-bridges-modal.component';
import { ModalHeaderComponent } from '../../shared/modal-building-block/modal-header/modal-header.component';

describe('FoundBridgesModalComponent', () => {
  let component: FoundBridgesModalComponent;
  let fixture: ComponentFixture<FoundBridgesModalComponent>;

  beforeEach(waitForAsync(() => {
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

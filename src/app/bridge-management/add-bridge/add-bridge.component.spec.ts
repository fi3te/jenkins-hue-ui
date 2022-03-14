import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddBridgeComponent } from './add-bridge.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('AddBridgeComponent', () => {
  let component: AddBridgeComponent;
  let fixture: ComponentFixture<AddBridgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBridgeComponent ],
      imports: [ FormsModule, HttpClientModule, ModalModule.forRoot() ],
      providers: [ HttpClient, BsModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

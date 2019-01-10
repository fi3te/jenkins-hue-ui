import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampListComponent } from './lamp-list.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RouterTestingModule } from '@angular/router/testing';

describe('LampListComponent', () => {
  let component: LampListComponent;
  let fixture: ComponentFixture<LampListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampListComponent ],
      imports: [ FormsModule, HttpClientModule, ModalModule.forRoot(), RouterTestingModule ],
      providers: [ HttpClient, BsModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PagingButtonBarComponent } from './../shared/paging/paging-button-bar/paging-button-bar.component';
import { PagingSearchBarComponent } from './../shared/paging/paging-search-bar/paging-search-bar.component';
import { PagingBarComponent } from './../shared/paging/paging-bar/paging-bar.component';
import { FormsModule } from '@angular/forms';
import { BridgeListComponent } from './bridge-list/bridge-list.component';
import { AddBridgeComponent } from './add-bridge/add-bridge.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BridgeManagementComponent } from './bridge-management.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BridgeManagementComponent', () => {
  let component: BridgeManagementComponent;
  let fixture: ComponentFixture<BridgeManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BridgeManagementComponent,
        AddBridgeComponent,
        BridgeListComponent,
        PagingBarComponent,
        PagingSearchBarComponent,
        PagingButtonBarComponent
      ],
      imports: [ FormsModule, HttpClientModule, ModalModule.forRoot(), RouterTestingModule ],
      providers: [ HttpClient, BsModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

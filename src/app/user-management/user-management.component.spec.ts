import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagingButtonBarComponent } from '../shared/paging/paging-button-bar/paging-button-bar.component';
import { PagingSearchBarComponent } from '../shared/paging/paging-search-bar/paging-search-bar.component';
import { PagingBarComponent } from '../shared/paging/paging-bar/paging-bar.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleService } from '../shared/role/role.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserManagementComponent,
        AddUserComponent,
        UserListComponent,
        PagingBarComponent,
        PagingSearchBarComponent,
        PagingButtonBarComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        HttpClient,
        RoleService,
        NgbModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

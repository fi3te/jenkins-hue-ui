import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { PagingModule } from '../../shared/paging/paging.module';
import { RoleService } from '../../shared/role/role.service';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [ PagingModule, HttpClientModule, ModalModule.forRoot(), RouterTestingModule ],
      providers: [ HttpClient, RoleService, BsModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

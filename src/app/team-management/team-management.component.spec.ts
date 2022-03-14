import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PagingButtonBarComponent } from './../shared/paging/paging-button-bar/paging-button-bar.component';
import { PagingSearchBarComponent } from './../shared/paging/paging-search-bar/paging-search-bar.component';
import { PagingBarComponent } from './../shared/paging/paging-bar/paging-bar.component';
import { FormsModule } from '@angular/forms';
import { AddTeamComponent } from './add-team/add-team.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamManagementComponent } from './team-management.component';
import { TeamListComponent } from './team-list/team-list.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RoleService } from '../shared/role/role.service';

describe('TeamManagementComponent', () => {
  let component: TeamManagementComponent;
  let fixture: ComponentFixture<TeamManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamManagementComponent,
        AddTeamComponent,
        TeamListComponent,
        PagingBarComponent,
        PagingSearchBarComponent,
        PagingButtonBarComponent
      ],
      imports: [ FormsModule, HttpClientModule, RouterTestingModule, ModalModule.forRoot() ],
      providers: [ HttpClient, BsModalService, RoleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

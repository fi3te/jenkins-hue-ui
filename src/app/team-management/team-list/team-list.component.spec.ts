import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { PagingBarComponent } from '../../shared/paging/paging-bar/paging-bar.component';
import { PagingSearchBarComponent } from '../../shared/paging/paging-search-bar/paging-search-bar.component';
import { PagingButtonBarComponent } from '../../shared/paging/paging-button-bar/paging-button-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoleService } from '../../shared/role/role.service';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListComponent, PagingBarComponent, PagingSearchBarComponent, PagingButtonBarComponent ],
      imports: [ FormsModule, HttpClientModule, RouterTestingModule, ModalModule.forRoot() ],
      providers: [ HttpClient, BsModalService, RoleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

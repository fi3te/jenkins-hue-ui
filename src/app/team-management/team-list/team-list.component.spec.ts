import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { PagingBarComponent } from '../../shared/paging/paging-bar/paging-bar.component';
import { PagingSearchBarComponent } from '../../shared/paging/paging-search-bar/paging-search-bar.component';
import { PagingButtonBarComponent } from '../../shared/paging/paging-button-bar/paging-button-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RoleService } from '../../shared/role/role.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListComponent, PagingBarComponent, PagingSearchBarComponent, PagingButtonBarComponent ],
      imports: [ FormsModule, HttpClientModule, RouterTestingModule ],
      providers: [ HttpClient, NgbModal, RoleService ]
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

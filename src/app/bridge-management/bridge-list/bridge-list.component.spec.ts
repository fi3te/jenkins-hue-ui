import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeListComponent } from './bridge-list.component';
import { PagingBarComponent } from '../../shared/paging/paging-bar/paging-bar.component';
import { PagingSearchBarComponent } from '../../shared/paging/paging-search-bar/paging-search-bar.component';
import { PagingButtonBarComponent } from '../../shared/paging/paging-button-bar/paging-button-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BridgeListComponent', () => {
  let component: BridgeListComponent;
  let fixture: ComponentFixture<BridgeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BridgeListComponent,
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
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

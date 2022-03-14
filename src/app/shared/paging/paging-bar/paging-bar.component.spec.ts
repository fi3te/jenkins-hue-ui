import { PagingButtonBarComponent } from './../paging-button-bar/paging-button-bar.component';
import { FormsModule } from '@angular/forms';
import { PagingSearchBarComponent } from './../paging-search-bar/paging-search-bar.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagingBarComponent } from './paging-bar.component';
import { PagingService } from '../paging.service';

describe('PagingBarComponent', () => {
  let component: PagingBarComponent;
  let fixture: ComponentFixture<PagingBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingBarComponent, PagingSearchBarComponent, PagingButtonBarComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

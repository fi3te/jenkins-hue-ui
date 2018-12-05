import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingSearchBarComponent } from './paging-search-bar.component';

describe('PagingSearchBarComponent', () => {
  let component: PagingSearchBarComponent;
  let fixture: ComponentFixture<PagingSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

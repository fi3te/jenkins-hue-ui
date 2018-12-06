import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingPageSizeSelectComponent } from './paging-page-size-select.component';

describe('PagingPageSizeSelectComponent', () => {
  let component: PagingPageSizeSelectComponent;
  let fixture: ComponentFixture<PagingPageSizeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingPageSizeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingPageSizeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

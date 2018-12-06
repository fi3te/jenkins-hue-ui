import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingButtonBarComponent } from './paging-button-bar.component';

describe('PagingButtonBarComponent', () => {
  let component: PagingButtonBarComponent;
  let fixture: ComponentFixture<PagingButtonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingButtonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingBarComponent } from './paging-bar.component';

describe('PagingBarComponent', () => {
  let component: PagingBarComponent;
  let fixture: ComponentFixture<PagingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingBarComponent ]
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

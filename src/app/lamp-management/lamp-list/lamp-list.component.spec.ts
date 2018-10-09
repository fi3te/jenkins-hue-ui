import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampListComponent } from './lamp-list.component';

describe('LampListComponent', () => {
  let component: LampListComponent;
  let fixture: ComponentFixture<LampListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

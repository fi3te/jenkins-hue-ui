import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundBridgesModalComponent } from './found-bridges-modal.component';

describe('FoundBridgesModalComponent', () => {
  let component: FoundBridgesModalComponent;
  let fixture: ComponentFixture<FoundBridgesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundBridgesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundBridgesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

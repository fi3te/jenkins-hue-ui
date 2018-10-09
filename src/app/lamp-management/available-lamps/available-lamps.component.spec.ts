import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableLampsComponent } from './available-lamps.component';

describe('AvailableLampsComponent', () => {
  let component: AvailableLampsComponent;
  let fixture: ComponentFixture<AvailableLampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableLampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

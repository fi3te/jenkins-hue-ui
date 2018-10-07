import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildAssignmentComponent } from './build-assignment.component';

describe('BuildAssignmentComponent', () => {
  let component: BuildAssignmentComponent;
  let fixture: ComponentFixture<BuildAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

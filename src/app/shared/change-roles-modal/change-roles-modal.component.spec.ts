import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRolesModalComponent } from './change-roles-modal.component';

describe('ChangeRolesModalComponent', () => {
  let component: ChangeRolesModalComponent;
  let fixture: ComponentFixture<ChangeRolesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRolesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

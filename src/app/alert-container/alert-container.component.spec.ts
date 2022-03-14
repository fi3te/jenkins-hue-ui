import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertContainerComponent } from './alert-container.component';
import { AlertModule } from 'ngx-bootstrap/alert';

describe('AlertContainerComponent', () => {
  let component: AlertContainerComponent;
  let fixture: ComponentFixture<AlertContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertContainerComponent ],
      imports: [ AlertModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

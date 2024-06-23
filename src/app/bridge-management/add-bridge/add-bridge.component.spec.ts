import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddBridgeComponent } from './add-bridge.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('AddBridgeComponent', () => {
  let component: AddBridgeComponent;
  let fixture: ComponentFixture<AddBridgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [AddBridgeComponent],
    imports: [FormsModule],
    providers: [HttpClient, NgbModal, provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

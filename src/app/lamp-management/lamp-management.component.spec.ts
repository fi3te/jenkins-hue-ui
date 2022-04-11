import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AvailableLampsComponent } from './available-lamps/available-lamps.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LampManagementComponent } from './lamp-management.component';
import { LampListComponent } from './lamp-list/lamp-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('LampManagementComponent', () => {
  let component: LampManagementComponent;
  let fixture: ComponentFixture<LampManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LampManagementComponent,
        AvailableLampsComponent,
        LampListComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        HttpClient,
        NgbModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

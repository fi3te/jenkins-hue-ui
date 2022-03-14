import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamSettingsComponent } from './team-settings.component';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterTestingModule } from '@angular/router/testing';

describe('TeamSettingsComponent', () => {
  let component: TeamSettingsComponent;
  let fixture: ComponentFixture<TeamSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSettingsComponent ],
      imports: [
        FormsModule,
        SortableModule.forRoot(),
        ModalModule.forRoot(),
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [ BsModalService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

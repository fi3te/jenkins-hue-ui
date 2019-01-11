import { AccordionStateService } from './accordion-state.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ColorPickerModule } from 'ngx-color-picker';
import { ScenarioConfigGroupComponent } from './scenario-config-group/scenario-config-group.component';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildAssignmentComponent } from './build-assignment.component';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { ScenarioConfigComponent } from './scenario-config/scenario-config.component';
import { ScenarioConfigSettingsComponent } from '../shared/scenario-config-settings/scenario-config-settings.component';
import { Ng5SliderModule } from 'ng5-slider';

describe('BuildAssignmentComponent', () => {
  let component: BuildAssignmentComponent;
  let fixture: ComponentFixture<BuildAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuildAssignmentComponent,
        RemoveButtonComponent,
        ScenarioConfigGroupComponent,
        ScenarioConfigComponent,
        ScenarioConfigSettingsComponent
      ],
      imports: [
        FormsModule,
        NgbTimepickerModule,
        ColorPickerModule,
        Ng5SliderModule,
        ModalModule.forRoot(),
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        BsModalService,
        HttpClient,
        AccordionStateService
      ]
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

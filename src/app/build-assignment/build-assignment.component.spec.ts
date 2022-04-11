import { AccordionStateService } from './accordion-state.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import { ScenarioConfigGroupComponent } from './scenario-config-group/scenario-config-group.component';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuildAssignmentComponent } from './build-assignment.component';
import { NgbModal, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { ScenarioConfigComponent } from './scenario-config/scenario-config.component';
import { ScenarioConfigSettingsComponent } from '../shared/scenario-config-settings/scenario-config-settings.component';
import { SliderComponent } from '../shared/scenario-config-settings/slider/slider.component';

describe('BuildAssignmentComponent', () => {
  let component: BuildAssignmentComponent;
  let fixture: ComponentFixture<BuildAssignmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuildAssignmentComponent,
        RemoveButtonComponent,
        ScenarioConfigGroupComponent,
        ScenarioConfigComponent,
        ScenarioConfigSettingsComponent,
        SliderComponent
      ],
      imports: [
        FormsModule,
        NgbTimepickerModule,
        ColorPickerModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        NgbModal,
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

import { Component, OnInit } from '@angular/core';

import { UniversalService } from '../service/http/universal.service';
import { SessionService } from '../service/session.service';
import { DTO } from './../generated-dtos.model';

import DashboardInformationDTO = DTO.DashboardInformationDTO;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboard: DashboardInformationDTO;

  constructor(
    private sessionService: SessionService,
    private universalService: UniversalService
  ) {}

  public ngOnInit(): void {
    this.universalService
      .getDashboardInformation(this.sessionService.getTeamId())
      .subscribe(
        next => {
          this.dashboard = next;
        }
      );
  }
}

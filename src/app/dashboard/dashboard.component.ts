import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DTO } from './../generated-dtos.model';

import DashboardInformationDTO = DTO.DashboardInformationDTO;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboard: DashboardInformationDTO;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data: { dashboardInformationDTO: DashboardInformationDTO }) => {
        this.dashboard = data.dashboardInformationDTO;
      }
    );
  }
}

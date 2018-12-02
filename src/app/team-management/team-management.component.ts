import { Component } from '@angular/core';

import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent {
  public isAdmin: boolean;

  constructor(sessionService: SessionService) {
    this.isAdmin = sessionService.isAdmin();
  }
}

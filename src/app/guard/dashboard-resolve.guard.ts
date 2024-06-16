import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UniversalService } from '../service/http/universal.service';
import { SessionService } from '../service/session.service';
import { DTO } from '../generated-dtos.model';

import DashboardInformationDTO = DTO.DashboardInformationDTO;

@Injectable({
  providedIn: 'root'
})
export class DashboardResolveGuard  {
  constructor(
    private sessionService: SessionService,
    private universalService: UniversalService
  ) {}

  resolve(): Observable<DashboardInformationDTO> {
    return this.universalService.getDashboardInformation(
      this.sessionService.getTeamId()
    );
  }
}

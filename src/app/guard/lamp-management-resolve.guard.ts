import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LampService } from '../service/http/lamp.service';
import { SessionService } from '../service/session.service';
import { DTO } from '../generated-dtos.model';

import TeamLampsDTO = DTO.TeamLampsDTO;

@Injectable({
  providedIn: 'root'
})
export class LampManagementResolveGuard  {
  constructor(
    private sessionService: SessionService,
    private lampService: LampService
  ) {}

  resolve(): Observable<TeamLampsDTO> {
    return this.lampService.findAllOfATeam(this.sessionService.getTeamId());
  }
}

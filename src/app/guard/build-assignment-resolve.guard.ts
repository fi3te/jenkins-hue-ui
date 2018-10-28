import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DTO } from '../generated-dtos.model';
import { LampService } from '../service/http/lamp.service';
import { SessionService } from '../service/session.service';

import TeamLampsDTO = DTO.TeamLampsDTO;

@Injectable({
  providedIn: 'root'
})
export class BuildAssignmentResolveGuard implements Resolve<TeamLampsDTO> {
  constructor(
    private sessionService: SessionService,
    private lampService: LampService
  ) {}

  resolve(): Observable<TeamLampsDTO> {
    return this.lampService.findAllOfATeam(this.sessionService.getTeamId());
  }
}

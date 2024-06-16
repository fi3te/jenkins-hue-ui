import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DTO } from '../generated-dtos.model';
import { TeamService } from '../service/http/team.service';
import { SessionService } from '../service/session.service';

import TeamUsersDTO = DTO.TeamUsersDTO;

@Injectable({
  providedIn: 'root'
})
export class TeamSettingsResolveGuard  {
  constructor(
    private teamService: TeamService,
    private sessionService: SessionService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TeamUsersDTO> {
    return this.teamService.findOne(this.sessionService.getTeamId());
  }
}

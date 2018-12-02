import { Component, OnInit } from '@angular/core';

import { DTO } from '../../generated-dtos.model';

import TeamUsersDTO = DTO.TeamUsersDTO;
import { PagingService } from '../../service/http/paging.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../service/session.service';
import { SimpleEnum } from '../../service/model/simple-enum.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  public teamData: PagingService<TeamUsersDTO>;
  public isAdmin: boolean;
  public loadingRoles: boolean;

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.isAdmin = this.sessionService.isAdmin();
    this.route.data.subscribe((data: { pagingService: PagingService<TeamUsersDTO> }) => {
      this.teamData = data.pagingService;
    });
  }

  public createUser(teamId: number): void {
    // TODO
  }

  public changeRoles(userId: number, roles: SimpleEnum[]): void {
    // TODO
  }

  public removingUserPossible(userId: number): boolean {
    // TODO
    return false;
  }

  public removeUser(userId: number): void {
    // TODO
  }

  public removingTeamPossible(userId: number): boolean {
    // TODO
    return false;
  }

  public removeTeam(teamId: number): void {
    // TODO
  }
}

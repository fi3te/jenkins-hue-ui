import { TeamManagementService } from '../team-management.service';
import { Component, OnInit } from '@angular/core';

import { DTO } from '../../generated-dtos.model';

import TeamUsersDTO = DTO.TeamUsersDTO;
import { PagingService } from '../../shared/paging/paging.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../service/session.service';
import { SimpleEnum } from '../../service/model/simple-enum.model';
import { TeamService } from '../../service/http/team.service';
import { AlertService } from '../../service/alert.service';
import { RoleService } from '../../shared/role/role.service';
import { UserService } from '../../service/http/user.service';
import { RenameModalComponent } from '../../shared/rename-modal/rename-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { modalErrorHandler } from '../../shared/util';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  public teamData: PagingService<TeamUsersDTO>;
  public isAdmin: boolean;
  public loadingRoles: boolean;

  private teamId: number;
  private userId: number;

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private teamManagementService: TeamManagementService,
    private modalService: NgbModal,
    private teamService: TeamService,
    private userService: UserService,
    private roleService: RoleService,
    private alertService: AlertService
  ) {
  }

  public ngOnInit(): void {
    this.isAdmin = this.sessionService.isAdmin();
    this.teamId = this.sessionService.getTeamId();
    this.userId = this.sessionService.getUserId();

    this.route.data.subscribe((data: { pagingService: PagingService<TeamUsersDTO> }) => {
      this.teamData = data.pagingService;
    });

    this.teamManagementService.teamCreated$.subscribe(() => {
      this.teamData.refresh();
    });
  }

  public createUser(teamId: number): void {
    const ngbModalRef = this.modalService.open(RenameModalComponent);
    ngbModalRef.componentInstance.title = 'Benutzer hinzufügen';
    ngbModalRef.componentInstance.icon = 'cui-user';
    ngbModalRef.result.then((name?: string) => {
      if (name) {
        this.userService.create({login: name, teamId}).subscribe(() => {
          this.teamData.refresh();
          this.alertService.info('Benutzer hinzugefügt!');
        });
      } else {
        this.alertService.warning('Eingabe ungültig!');
      }
    }).catch(modalErrorHandler);
  }

  public changeRoles(userId: number, currentRoles: SimpleEnum[]): void {
    this.roleService.changeRoles(userId, currentRoles, (loading: boolean) => {
      this.loadingRoles = loading;
    }, () => {
      this.teamData.refresh();
    });
  }

  public removingUserPossible(userId: number): boolean {
    return this.userId !== userId;
  }

  public removeUser(userId: number): void {
    this.userService.remove(userId).subscribe(() => {
      this.teamData.refresh();
    });
  }

  public removingTeamPossible(teamId: number): boolean {
    return this.teamId !== teamId;
  }

  public removeTeam(teamId: number): void {
    this.teamService.remove(teamId).subscribe(() => {
      this.teamData.refresh();
    });
  }
}

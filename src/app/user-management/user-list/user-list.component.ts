import { AlertService } from './../../service/alert.service';
import { Component, OnInit } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import { PagingService } from '../../service/http/paging.service';
import { UserService } from '../../service/http/user.service';
import { RoleService } from '../../shared/role.service';
import { SessionService } from '../../service/session.service';
import { UserManagementService } from '../user-management.service';
import { SimpleEnum } from './../../service/model/simple-enum.model';

import UserDTO = DTO.UserDTO;
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ChangeRolesModalComponent } from '../../shared/change-roles-modal/change-roles-modal.component';
import { UniversalService } from '../../service/http/universal.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userData: PagingService<UserDTO>;
  public isAdmin: boolean;
  public userId: number;
  public loadingRoles: boolean;

  private teamId: number;

  constructor(
    private userManagementService: UserManagementService,
    private userService: UserService,
    private sessionService: SessionService,
    private roleService: RoleService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private universalService: UniversalService
  ) {}

  public ngOnInit(): void {
    this.teamId = this.sessionService.getTeamId();
    this.isAdmin = this.sessionService.isAdmin();
    this.userId = this.sessionService.getUserId();

    this.route.data.subscribe((data: { pagingService: PagingService<UserDTO> }) => {
      this.userData = data.pagingService;
    });

    this.userManagementService.userCreated$.subscribe(() => {
      this.userData.refresh();
    });
  }

  public removingUserPossible(user: UserDTO): boolean {
    return (
      ((!this.roleService.containsAdminRole(user.roles) &&
        user.team.id === this.teamId) ||
        this.isAdmin) &&
      user.id !== this.userId
    );
  }

  public changeRoles(id: number, currentRoles: SimpleEnum[]): void {
    this.roleService.changeRoles(id, currentRoles, (loading) => {
      this.loadingRoles = loading;
    }, () => {
      this.userData.refresh();
    });
  }

  public removeUser(user: UserDTO): void {
    this.userService.remove(user.id).subscribe(() => {
      this.userData.refresh();
    });
  }
}

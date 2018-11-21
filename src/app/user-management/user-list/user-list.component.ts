import { Component, OnInit } from '@angular/core';

import { DTO } from '../../generated-dtos.model';
import { REST_USERS } from '../../service/http/common/constants';
import { PagingService } from '../../service/http/paging.service';
import { UserService } from '../../service/http/user.service';
import { RoleService } from '../../service/role.service';
import { SessionService } from '../../service/session.service';
import { UserManagementService } from '../user-management.service';
import { SimpleEnum } from './../../service/model/simple-enum.model';

import UserDTO = DTO.UserDTO;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userData: PagingService<UserDTO>;
  public isAdmin: boolean;
  public userId: number;

  private teamId: number;

  constructor(
    private userManagementService: UserManagementService,
    private userService: UserService,
    private sessionService: SessionService,
    private roleService: RoleService,
    pagingService: PagingService<UserDTO>
  ) {
    pagingService.setUrl(REST_USERS);
    this.userData = pagingService;
  }

  public ngOnInit(): void {
    this.teamId = this.sessionService.getTeamId();
    this.isAdmin = this.sessionService.isAdmin();
    this.userId = this.sessionService.getUserId();
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

  public loadingRoles(): boolean {
    // TODO
    return true;
  }

  public changeRoles(id: number, roles: SimpleEnum[]): void {
    // TODO
  }

  public removeUser(user: UserDTO): void {
    this.userService.remove(user.id).subscribe(() => {
      this.userData.refresh();
    });
  }
}

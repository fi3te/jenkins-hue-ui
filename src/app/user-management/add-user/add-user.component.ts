import { AlertService } from './../../service/alert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

import { SessionService } from '../../service/session.service';
import { UserService } from './../../service/http/user.service';
import { UserManagementService } from './../user-management.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public login: string;

  @ViewChild('loginName')
  public loginName: NgModel;

  private teamId: number;

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private userManagementService: UserManagementService,
    private alertService: AlertService
  ) { }

  public ngOnInit(): void {
    this.teamId = this.sessionService.getTeamId();
  }

  public createUser(): void {
    if (this.login) {
      this.userService.create({login: this.login, teamId: this.teamId}).subscribe(() => {
        this.userManagementService.userCreated();
        this.alertService.info('Benutzer hinzugefügt!');
      });
      this.login = '';
      this.loginName.control.markAsPristine({onlySelf: true});
    }
  }
}

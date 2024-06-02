import { Component, EventEmitter, Output } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output()
  navbarTogglerClick = new EventEmitter<void>();

  public username: string;

  constructor(private sessionService: SessionService) {
    this.username = this.sessionService.getUsername();
  }

  public logout(): void {
    this.sessionService.logout();
  }
}

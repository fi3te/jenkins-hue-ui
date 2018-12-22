import { SessionService } from './../../service/session.service';
import { Component } from '@angular/core';
import { navItems } from './../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public username: string;

  constructor(private sessionService: SessionService) {
    this.changes = new MutationObserver(() => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

    this.username = this.sessionService.getUsername();
  }

  public logout(): void {
    this.sessionService.logout();
  }
}

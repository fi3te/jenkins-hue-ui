import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavItem } from '../_nav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

enum Mode {
  CLOSED,
  OPEN_COMPACT,
  OPEN_WIDE
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input()
  navItems: NavItem[] = [];

  @Input()
  open = true;

  @Input()
  compact = false;

  @Output()
  compactTogglerClick = new EventEmitter<void>();

  Mode = Mode;

  currentUrl$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.url),
    startWith(this.router.url)
  );

  constructor(private router: Router) {
  }

  get mode(): Mode {
    if (this.open) {
      return this.compact ? Mode.OPEN_COMPACT : Mode.OPEN_WIDE;
    } else {
      return Mode.CLOSED;
    }
  }
}

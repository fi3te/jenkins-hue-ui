import { Component } from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

  navItems = navItems;
  sidebarOpen = true;
  sidebarCompact = false;

  constructor() {
  }
}

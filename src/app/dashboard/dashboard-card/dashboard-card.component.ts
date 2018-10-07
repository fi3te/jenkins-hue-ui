import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {

  @Input()
  public backgroundColor: string;

  @Input()
  public caption: string;

  @Input()
  public text: string;

  @Input()
  public icon: string;

  @Input()
  public linkText: string;

  @Input()
  public link: string;

}

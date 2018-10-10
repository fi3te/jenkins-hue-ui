import { SessionService } from './../service/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.test();
  }

}

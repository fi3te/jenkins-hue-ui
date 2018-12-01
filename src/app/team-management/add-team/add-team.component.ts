import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  public name: string;

  constructor() { }

  ngOnInit() {
  }

  public createTeam(): void {
    // TODO
  }

}

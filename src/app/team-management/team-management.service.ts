import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamManagementService {

  private _teamCreated$ = new Subject<void>();

  public teamCreated$ = this._teamCreated$.asObservable();

  public teamCreated(): void {
    this._teamCreated$.next();
  }
}

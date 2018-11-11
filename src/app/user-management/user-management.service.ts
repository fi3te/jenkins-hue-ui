import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private _userCreated$ = new Subject<void>();

  public userCreated$ = this._userCreated$.asObservable();

  public userCreated(): void {
    this._userCreated$.next();
  }
}

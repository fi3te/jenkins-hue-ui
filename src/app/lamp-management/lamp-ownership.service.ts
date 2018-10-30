import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DTO } from './../generated-dtos.model';

import LampDTO = DTO.LampDTO;

@Injectable({
  providedIn: 'root'
})
export class LampOwnershipService {
  private _lampTaken$ = new Subject<void>();
  private _lampReleased$ = new Subject<void>();

  public lampTaken$ = this._lampTaken$.asObservable();
  public lampReleased$ = this._lampReleased$.asObservable();

  public lampTaken() {
    this._lampTaken$.next();
  }

  public lampReleased() {
    this._lampReleased$.next();
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeOwnershipService {

  private _bridgeCreated$ = new Subject<void>();

  public bridgeCreated$ = this._bridgeCreated$.asObservable();

  public bridgeCreated(): void {
    this._bridgeCreated$.next();
  }
}

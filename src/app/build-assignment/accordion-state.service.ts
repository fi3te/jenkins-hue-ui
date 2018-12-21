import { Injectable } from '@angular/core';

@Injectable()
export class AccordionStateService<T> {

  private _open: T | undefined;

  public isClosed(index: T): boolean {
    return this._open !== index;
  }

  public isOpen(index: T): boolean {
    return this._open === index;
  }

  public toggle(index: T): void {
    if (this._open === index) {
      this._open = undefined;
    } else {
      this._open = index;
    }
  }
}

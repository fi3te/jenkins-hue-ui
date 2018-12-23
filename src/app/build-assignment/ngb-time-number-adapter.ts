import {Injectable} from '@angular/core';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class NgbTimeNumberAdapter extends NgbTimeAdapter<number> {

  public fromModel(value: number): NgbTimeStruct {
    if (!value) {
      return null;
    }
    const date = new Date(value);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  public toModel(time: NgbTimeStruct): number {
    if (!time) {
      return null;
    }
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), time.hour, time.minute, time.second).getTime();
  }
}

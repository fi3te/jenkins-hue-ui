import { state, transition, animate, style, trigger } from '@angular/animations';

export class Animations {
    public static slideInOut = trigger('slideInOut', [
        state('true', style({ height: '0' })),
        state('false', style({ height: '*', overflow: 'visible' })),
        transition('1 => 0', animate('400ms ease-in')),
        transition('0 => 1', animate('400ms ease-out'))
    ]);
}

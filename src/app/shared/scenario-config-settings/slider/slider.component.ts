import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  private _value: number;

  @Input()
  set value(newValue: number) {
    this._value = newValue;
    this.valueChange.emit(this._value);
    this.updateBackground();
  }

  get value(): number {
     return this._value;
  }

  @Output()
  public valueChange: EventEmitter<number> = new EventEmitter();

  @Input()
  public min: number;

  @Input()
  public max: number;

  public background = '';

  public ngOnInit(): void {
    this.updateBackground();
  }

  public updateBackground(): void {
    const percent =  Math.floor(this.value / this.max * 100);
    this.background = `linear-gradient(90deg, #20a8d8 ${percent}%, #d8e0f3 ${percent}%)`;
  }
}

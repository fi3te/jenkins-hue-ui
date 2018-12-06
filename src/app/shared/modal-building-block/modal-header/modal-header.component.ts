import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {

  @Input()
  public title: string;

  @Output()
  public cancel = new EventEmitter<void>();

  public doCancel(): void {
    this.cancel.emit();
  }
}

import { Component, Input } from '@angular/core';
import { PagingService } from '../paging.service';

@Component({
  selector: 'app-paging-button-bar',
  templateUrl: './paging-button-bar.component.html',
  styleUrls: ['./paging-button-bar.component.scss']
})
export class PagingButtonBarComponent {

  @Input()
  public pagingService: PagingService<any>;
}

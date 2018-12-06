import { Component, Input } from '@angular/core';
import { PagingService } from '../paging.service';

@Component({
  selector: 'app-paging-bar',
  templateUrl: './paging-bar.component.html',
  styleUrls: ['./paging-bar.component.scss']
})
export class PagingBarComponent {

  @Input()
  public pagingService: PagingService<any>;
}

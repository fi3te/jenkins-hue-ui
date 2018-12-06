import { Component, Input } from '@angular/core';
import { PagingService } from '../paging.service';

@Component({
  selector: 'app-paging-page-size-select',
  templateUrl: './paging-page-size-select.component.html',
  styleUrls: ['./paging-page-size-select.component.scss']
})
export class PagingPageSizeSelectComponent {

  @Input()
  public pagingService: PagingService<any>;
}

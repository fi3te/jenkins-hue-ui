import { Component, Input } from '@angular/core';
import { PagingService } from '../paging.service';

@Component({
  selector: 'app-paging-search-bar',
  templateUrl: './paging-search-bar.component.html',
  styleUrls: ['./paging-search-bar.component.scss']
})
export class PagingSearchBarComponent {

  @Input()
  public pagingService: PagingService<any>;
}

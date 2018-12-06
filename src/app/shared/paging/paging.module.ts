import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingService } from './paging.service';
import { PagingSearchBarComponent } from './paging-search-bar/paging-search-bar.component';
import { PagingButtonBarComponent } from './paging-button-bar/paging-button-bar.component';
import { PagingPageSizeSelectComponent } from './paging-page-size-select/paging-page-size-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PagingSearchBarComponent,
    PagingButtonBarComponent,
    PagingPageSizeSelectComponent
  ],
  exports: [
    PagingSearchBarComponent,
    PagingButtonBarComponent,
    PagingPageSizeSelectComponent
  ],
  providers: [
    PagingService
  ]
})
export class PagingModule { }

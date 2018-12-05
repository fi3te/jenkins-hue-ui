import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingService } from './paging.service';
import { PagingSearchBarComponent } from './paging-search-bar/paging-search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PagingSearchBarComponent
  ],
  exports: [
    PagingSearchBarComponent
  ],
  providers: [
    PagingService
  ]
})
export class PagingModule { }

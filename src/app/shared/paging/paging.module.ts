import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingService } from './paging.service';
import { PagingSearchBarComponent } from './paging-search-bar/paging-search-bar.component';
import { PagingButtonBarComponent } from './paging-button-bar/paging-button-bar.component';
import { PagingBarComponent } from './paging-bar/paging-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PagingSearchBarComponent,
    PagingButtonBarComponent,
    PagingBarComponent
  ],
  exports: [
    PagingBarComponent
  ],
  providers: [
    PagingService
  ]
})
export class PagingModule { }

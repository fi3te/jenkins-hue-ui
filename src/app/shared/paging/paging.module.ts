import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingService } from './paging.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchBarComponent],
  providers: [
    PagingService
  ]
})
export class PagingModule { }

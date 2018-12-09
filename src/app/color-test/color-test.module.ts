import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorTestComponent } from './color-test.component';
import { ColorTestRoutingModule } from './color-test-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    ColorTestRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule
  ],
  declarations: [ColorTestComponent]
})
export class ColorTestModule { }

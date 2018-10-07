import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorTestComponent } from './color-test.component';
import { ColorTestRoutingModule } from './color-test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ColorTestRoutingModule
  ],
  declarations: [ColorTestComponent]
})
export class ColorTestModule { }

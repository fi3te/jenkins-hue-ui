import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ColorTestComponent } from './color-test.component';

const routes: Routes = [
  {
    path: '',
    component: ColorTestComponent,
    data: {
      title: 'Farbentest'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorTestRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RgbPage } from './rgb.page';

const routes: Routes = [
  {
    path: '',
    component: RgbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RgbPageRoutingModule {}

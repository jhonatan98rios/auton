import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComodosPage } from './comodos.page';

import { DispositivosPage } from './dispositivos/dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: ComodosPage
  },
  {
    path: 'dispositivos',
    component: DispositivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComodosPageRoutingModule {}

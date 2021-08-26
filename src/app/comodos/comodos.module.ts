import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComodosPageRoutingModule } from './comodos-routing.module';

import { ComodosPage } from './comodos.page';

import { CardComodoComponent } from './card-comodo/card-comodo.component';

import { DispositivosPageModule } from './dispositivos/dispositivos.module';

import { GeralModule } from '../geral/geral.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComodosPageRoutingModule,
    DispositivosPageModule,
    GeralModule
  ],
  declarations: [ComodosPage, CardComodoComponent],
})
export class ComodosPageModule {}

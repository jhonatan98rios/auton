import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvPageRoutingModule } from './tv-routing.module';

import { TvPage, TecladoNumericoModal, TecladoMaisModal, TecladoAvModal } from './tv.page';
import { GeralModule } from 'src/app/geral/geral.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvPageRoutingModule,
    GeralModule,
  ],
  declarations: [TvPage, TecladoNumericoModal, TecladoMaisModal, TecladoAvModal]
})
export class TvPageModule { }

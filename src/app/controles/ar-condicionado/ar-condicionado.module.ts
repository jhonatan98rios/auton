import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArCondicionadoPageRoutingModule } from './ar-condicionado-routing.module';

import { ArCondicionadoPage } from './ar-condicionado.page';
import { GeralModule } from 'src/app/geral/geral.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArCondicionadoPageRoutingModule,
    GeralModule
  ],
  declarations: [ArCondicionadoPage]
})
export class ArCondicionadoPageModule {}

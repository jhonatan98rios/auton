import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { SliderTemperaturaComponent } from './slider-temperatura/slider-temperatura.component';

import { BotaoCircularComponent } from './botao-circular/botao-circular.component';
import { ControleDirecionalComponent } from './controle-direcional/controle-direcional.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    SliderTemperaturaComponent, 
    BotaoCircularComponent,
    ControleDirecionalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent, 
    SliderTemperaturaComponent, 
    BotaoCircularComponent,
    ControleDirecionalComponent
  ]
})
export class GeralModule { }

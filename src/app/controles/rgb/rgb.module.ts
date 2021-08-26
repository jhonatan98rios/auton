import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RgbPageRoutingModule } from './rgb-routing.module';

import { RgbPage } from './rgb.page';
import { GeralModule } from 'src/app/geral/geral.module';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RgbPageRoutingModule,
    GeralModule
  ],
  declarations: [RgbPage]
})
export class RgbPageModule {

  constructor(private router: Router){

  }
  
  voltarParaComodos() {
    this.router.navigateByUrl('/tabs/comodos');
  }

}

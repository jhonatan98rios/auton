import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetorPageRoutingModule } from './projetor-routing.module';

import { ProjetorPage } from './projetor.page';
import { GeralModule } from 'src/app/geral/geral.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetorPageRoutingModule,
    GeralModule
  ],
  declarations: [ProjetorPage]
})
export class ProjetorPageModule {}

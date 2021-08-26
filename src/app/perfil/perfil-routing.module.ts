import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  },
  {
    path: 'alterar-senha',
    component: AlterarSenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule { }

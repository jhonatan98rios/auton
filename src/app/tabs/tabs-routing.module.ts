import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from './../_helpers/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'comodos',
        loadChildren: () => import('../comodos/comodos.module').then( m => m.ComodosPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'cenas',
        loadChildren: () => import('../cenas/cenas.module').then( m => m.CenasPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/comodos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/comodos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

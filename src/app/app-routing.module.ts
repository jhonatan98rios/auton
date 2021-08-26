import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'controlhes/ac',
    loadChildren: () => import('./controles/ar-condicionado/ar-condicionado.module').then(m => m.ArCondicionadoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'controlhes/tv',
    loadChildren: () => import('./controles/tv/tv.module').then(m => m.TvPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'controlhes/player',
    loadChildren: () => import('./controles/player/player.module').then( m => m.PlayerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'controlhes/rgb',
    loadChildren: () => import('./controles/rgb/rgb.module').then( m => m.RgbPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'controlhes/projetor',
    loadChildren: () => import('./controles/projetor/projetor.module').then( m => m.ProjetorPageModule),
    canActivate: [AuthGuard]
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

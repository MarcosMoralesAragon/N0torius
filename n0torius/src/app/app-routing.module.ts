import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'curso',
    loadChildren: () => import('./pages/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'curso/:id',
    loadChildren: () => import('./pages/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule)
  },{
    path: 'crear/:id',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

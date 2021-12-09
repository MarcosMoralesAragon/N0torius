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
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista/lista.module').then( m => m.ListaPageModule)
  },{
    path: 'lista/:id',
    loadChildren: () => import('./pages/lista/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'asignatura',
    loadChildren: () => import('./pages/asignatura/asignatura.module').then( m => m.AsignaturaPageModule)
  },
  {
    path: 'asignatura/:id',
    loadChildren: () => import('./pages/asignatura/asignatura.module').then( m => m.AsignaturaPageModule)
  },
  {
    path: 'examen',
    loadChildren: () => import('./pages/examen/examen.module').then( m => m.ExamenPageModule)
  },
  {
    path: 'examen/:id',
    loadChildren: () => import('./pages/examen/examen.module').then( m => m.ExamenPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

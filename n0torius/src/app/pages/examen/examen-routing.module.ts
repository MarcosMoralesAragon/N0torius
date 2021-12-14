import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenPage } from './examen.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenPageRoutingModule {}

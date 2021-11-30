import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './curso-routing.module';

import { CursoPage } from './curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule
  ],
  declarations: [CursoPage]
})
export class CursoPageModule {}

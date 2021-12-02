import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../models/curso/curso';
import { CursoServiceService } from '../services/curso/curso-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cursos: Curso [] = []
  nombreUsuario : string = "Marcos"

  constructor(private cursoService: CursoServiceService,
              private router:Router) {
    this.cursos = cursoService.getCursos()
    console.log("aqui")
  }

  irACurso(id: number){
    this.router.navigateByUrl('/curso/'+ id);
  }
  crearCurso(){
    this.router.navigateByUrl('/crear')
  }
}

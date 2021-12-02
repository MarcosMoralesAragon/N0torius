import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { Curso } from 'src/app/models/curso/curso';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { CursoServiceService } from 'src/app/services/curso/curso-service.service';
import { CursoPage } from '../curso/curso.page';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  queSeEstaCreando: String = "Examen"
  llamadoDesdeCurso: boolean
  idCurso;
  valorCampos = []
  asignaturas : Asignatura[] = []

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private cursoService: CursoServiceService,
              private asignaturaService:AsignaturaServiceService) {}

  ngOnInit() {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id')
    if(this.idCurso != null){
      this.asignaturas = this.asignaturaService.getAsignaturas().filter(curso => curso.idCurso == +this.idCurso)
    }
  }

  creandoAsignatura(){
    this.queSeEstaCreando = "Asignatura"
  }

  creandoExamen(){
    this.queSeEstaCreando = "Examen"
  }

  volver(){
    if(this.idCurso){
      this.router.navigateByUrl('curso/' + this.idCurso)
    } else {
      this.router.navigateByUrl('/home')
    } 
  }
  crear(){
    if(this.idCurso){ // Comprobación para saber si viene de una llamada desde dentro de un curso o desde fuera de uno
        var nuevaAsignatura : Asignatura = new Asignatura()
        nuevaAsignatura.idCurso = this.idCurso
        nuevaAsignatura.nombre = this.valorCampos[0]
        nuevaAsignatura.descripcion = this.valorCampos[1]
        nuevaAsignatura.id = this.asignaturaService.getAsignaturas().length
        this.asignaturaService.addAsignatura(nuevaAsignatura)
    }else{
      var nuevoCurso : Curso = new Curso()
      nuevoCurso.nombre = this.valorCampos[0]
      nuevoCurso.id = this.cursoService.getCursos().length
      this.cursoService.getCursos().push(nuevoCurso)
    }
    this.volver()
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Curso } from 'src/app/models/curso/curso';
import { CursoServiceService } from 'src/app/services/curso/curso-service.service';

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

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private cursoService: CursoServiceService) { 
                
              }

  ngOnInit() {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id')
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

    if(this.idCurso){
      
    }else{
      var nuevoCurso : Curso = new Curso()
      nuevoCurso.nombre = this.valorCampos[0]
      nuevoCurso.id = this.cursoService.getCursos().length
      this.cursoService.getCursos().push(nuevoCurso)
    }
    this.volver()
  }
}

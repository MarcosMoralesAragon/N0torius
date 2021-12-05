import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { Curso } from 'src/app/models/curso/curso';
import { Examen } from 'src/app/models/examen/examen';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { CursoServiceService } from 'src/app/services/curso/curso-service.service';
import { ExamenServiceService } from 'src/app/services/examen/examen-service.service';
import { AsignaturaPage } from '../asignatura/asignatura.page';
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
  mensajeCamposObligatoriosVacios = ""

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private cursoService: CursoServiceService,
              private asignaturaService:AsignaturaServiceService,
              private examenService:ExamenServiceService) {}

  ngOnInit() {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id')
    if(this.idCurso != null){
      this.asignaturas = this.asignaturaService.getAsignaturas().filter(curso => curso.idCurso == +this.idCurso)
    }
  }

  creandoAsignatura(){
    this.queSeEstaCreando = "Asignatura"
    this.mensajeCamposObligatoriosVacios = ""
  }

  creandoExamen(){
    this.queSeEstaCreando = "Examen"
    this.mensajeCamposObligatoriosVacios = ""
  }

  volver(){
    if(this.idCurso){
      this.router.navigateByUrl('curso/' + this.idCurso)
    } else {
      this.router.navigateByUrl('/home')
    } 
  }
  crear(){
    if(this.comprobarCamposObligatorios()){
      if(this.idCurso){ // Comprobación para saber si viene de una llamada desde dentro de un curso o desde fuera de uno
        if(this.queSeEstaCreando == "Asignatura"){
          var nuevaAsignatura : Asignatura = new Asignatura()
          nuevaAsignatura = this.rellenarDatosAsignatura(nuevaAsignatura)
          this.asignaturaService.addAsignatura(nuevaAsignatura)
        } else if (this.queSeEstaCreando == "Examen"){
          var nuevoExamen : Examen = new Examen()
          nuevoExamen = this.rellenarDatosExamen(nuevoExamen)
          this.examenService.addExamen(nuevoExamen)
        }
      }else{
        var nuevoCurso : Curso = new Curso()
        nuevoCurso = this.rellenarDatosCurso(nuevoCurso)
        this.cursoService.getCursos().push(nuevoCurso)
      }
      this.volver()
    } else {
      this.mensajeCamposObligatoriosVacios = "Rellene los campos obligatorios"
    }
  }

  comprobarCamposObligatorios() : boolean{
    var resultadoComprobación : boolean = false
    if(this.idCurso){
      if((this.valorCampos[0]) && (this.valorCampos[1])){
        resultadoComprobación = true;
      }
    } else {
      if(this.valorCampos[0]){
        resultadoComprobación = true
      }
    }
    return resultadoComprobación
  }

  rellenarDatosExamen( examen : Examen ) : Examen{
    examen.id = this.examenService.getExamenes().length
    examen.nombre = this.valorCampos[0]
    if(this.valorCampos[2]){  // Si el campo tiene un valor entra en el if
      examen.nota = this.valorCampos[2]
    }

    if(this.valorCampos[3]){
      examen.opinionesSobreElExamen = this.valorCampos[3]
    }

    if(this.valorCampos[4]){
      examen.valoracionDelProfesor = this.valorCampos[4]
    }

    examen.idCurso = this.asignaturaService.getAsignaturas().find(asignatura => asignatura.id == this.valorCampos[0]).idCurso
    examen.idAsignatura = this.valorCampos[1]
    return examen
  }
  rellenarDatosAsignatura( asignatura : Asignatura ) : Asignatura{
    asignatura.id = this.asignaturaService.getAsignaturas().length
    asignatura.nombre = this.valorCampos[0]
    asignatura.descripcion = this.valorCampos[1]
    asignatura.idCurso = this.idCurso
    return asignatura
  }
  rellenarDatosCurso(curso : Curso) : Curso{
    curso.id = this.cursoService.getCursos().length
    curso.nombre = this.valorCampos[0]
    return curso
  }
}

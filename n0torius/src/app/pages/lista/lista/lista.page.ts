import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Examen } from 'src/app/models/examen/examen';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { ExamenServiceService } from 'src/app/services/examen/examen-service.service';
import { ListaService } from 'src/app/services/lista/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  idCurso
  queListar = "Examenes"
  lista = []
  examenesCompletos:Examen[] = []
  examenesSinNota:Examen[]  = []
  examenesSinOpinion:Examen[]  = []
  examenesSinValoracion:Examen[]  = []

  constructor(private activatedRoute : ActivatedRoute,
              private router: Router,
              private listaService : ListaService,
              private examenService : ExamenServiceService,
              private asignaturaService : AsignaturaServiceService) { }

  ngOnInit() {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id')
    this.queListar = this.listaService.saberQueListar()
    if(this.queListar == "Asignaturas"){
      this.asignaturaService.conteoExamenesDeCadaAsignatura()
      this.lista = this.asignaturaService.getAsignaturas().filter(asignatura => asignatura.idCurso == this.idCurso)
      console.log(this.lista)
    } else {
      this.lista = this.examenService.getExamenes()
      for (let index = 0; index < this.lista.length; index++) {
        this.asignacionEstadoExamenes(this.lista[index])
      }
    }
  }

  irAAsignatura(idAsignatura : number){
    this.router.navigateByUrl('/asignatura/' + idAsignatura)
  }

  asignacionEstadoExamenes(examen : Examen){
    if(!examen.nota){
      this.examenesSinNota.push(examen)
    }
    if(!examen.opinionesSobreElExamen){
      this.examenesSinOpinion.push(examen)
    }
    if(!examen.valoracionDelProfesor){
      this.examenesSinValoracion.push(examen)
    }
    if((examen.nota) && (examen.opinionesSobreElExamen) && (examen.valoracionDelProfesor)){
      this.examenesCompletos.push(examen)
    }
  }

}

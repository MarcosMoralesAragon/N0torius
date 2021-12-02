import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private listaService : ListaService,
              private examenService : ExamenServiceService,
              private asignaturaService : AsignaturaServiceService) { }

  ngOnInit() {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id')
    this.queListar = this.listaService.saberQueListar()
    if(this.queListar == "Asignaturas"){
      this.lista = this.asignaturaService.getAsignaturas().filter(asignatura => asignatura.idCurso == this.idCurso)
    } else {
      this.lista = this.examenService.getExamenes()
      for (let index = 0; index < this.lista.length; index++) {
        this.asignacionEstadoExamenes(this.lista[index])
      }
    }
  }

  asignacionEstadoExamenes(examen : Examen){
    if(examen.nota == undefined){
      this.examenesSinNota.push(examen)
    }
    if(examen.opinionesSobreElExamen == undefined){
      this.examenesSinOpinion.push(examen)
    }
    if(examen.valoracionDelProfesor == undefined){
      this.examenesSinValoracion.push(examen)
    }
    if((examen.nota != undefined) && (examen.opinionesSobreElExamen != undefined) && (examen.valoracionDelProfesor != undefined)){
      this.examenesCompletos.push(examen)
    }
  }

}

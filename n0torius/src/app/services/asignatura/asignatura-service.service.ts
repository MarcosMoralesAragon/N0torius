import { Injectable } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { Examen } from 'src/app/models/examen/examen';
import { CursoServiceService } from '../curso/curso-service.service';
import { ExamenServiceService } from '../examen/examen-service.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaServiceService {
  asignaturas: Asignatura[] = [
    {
      "id": 0,
      "nombre" : "BBDD",
      "descripcion": "Base de datos",
      "idCurso": 0,
    },
    {
      "id": 1,
      "nombre" : "PG",
      "descripcion":"Programación" ,
      "idCurso": 0
    },
    {
      "id": 2,
      "nombre" : "LM",
      "descripcion":"Lenguajes de marcas",
      "idCurso": 0
    },
    {
      "id": 3,
      "nombre" : "SINF",
      "descripcion": "Sistemas informaticos",
      "idCurso": 0
    },
    {
      "id": 4,
      "nombre" : "AD",
      "descripcion":"Acceso a datos",
      "idCurso": 1
    },
    {
      "id": 5,
      "nombre" : "DI",
      "descripcion": "Diseño de interfaces",
      "idCurso": 1
    },
    {
      "id": 6,
      "nombre" : "PSP",
      "descripcion": "Android",
      "idCurso": 1
    },
    {
      "id": 7,
      "nombre" : "SGE",
      "descripcion": "Sistemas de gestión empresarial",
      "idCurso": 1
    },
    {
      "id": 8,
      "nombre" : "FISICA",
      "descripcion": "Fisica",
      "idCurso": 2
    },
    {
      "id": 9,
      "nombre" : "MATES",
      "descripcion": "Matematicas",
      "idCurso": 2
    },
    {
      "id": 10,
      "nombre" : "LENGUA",
      "descripcion": "Lengua castellana",
      "idCurso": 2
    },
    {
      "id": 11,
      "nombre" : "EF",
      "descripcion": "Educacion física",
      "idCurso": 2,
    }
  ]
  constructor(private examenService : ExamenServiceService) {
  }

  getAsignaturas(){
    console.log("pasa por get asignaturas")
    return this.asignaturas
  }

  addAsignatura(asignatura : Asignatura){
    this.asignaturas.push(asignatura)
  }

  conteoExamenesDeCadaAsignatura(){
    var examenes:Examen[] = []
    for (let index = 0; index < this.asignaturas.length; index++) {
      examenes = this.examenService.getExamenes()
      var id = this.asignaturas[index].id
      this.asignaturas[index].cantidadDeExamenes = examenes.filter( examen => examen.idAsignatura == id).length
    }
  }
}

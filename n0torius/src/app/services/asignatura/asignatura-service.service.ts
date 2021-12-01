import { Injectable } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { CursoServiceService } from '../curso/curso-service.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaServiceService {

  asignaturas: Asignatura[] = [
    {
      "id": 1,
      "nombre" : "BBDD",
      "descripcion": "Base de datos",
      "idCurso": 0
    },
    {
      "id": 2,
      "nombre" : "PG",
      "descripcion":"Programación" ,

      "idCurso": 0
    },
    {
      "id": 3,
      "nombre" : "LM",
      "descripcion":"Lenguajes de marcas",
      "idCurso": 0
    },
    {
      "id": 4,
      "nombre" : "SINF",
      "descripcion": "Sistemas informaticos",
      "idCurso": 0
    },
    {
      "id": 5,
      "nombre" : "AD",
      "descripcion":"Acceso a datos",
      "idCurso": 1
    },
    {
      "id": 6,
      "nombre" : "DI",
      "descripcion": "Diseño de interfaces",
      "idCurso": 1
    },
    {
      "id": 7,
      "nombre" : "PSP",
      "descripcion": "Android",
      "idCurso": 1
    },
    {
      "id": 8,
      "nombre" : "SGE",
      "descripcion": "Sistemas de gestión empresarial",
      "idCurso": 1
    },
    {
      "id": 9,
      "nombre" : "FISICA",
      "descripcion": "Fisica",
      "idCurso": 2
    },
    {
      "id": 10,
      "nombre" : "MATES",
      "descripcion": "Matematicas",
      "idCurso": 2
    },
    {
      "id": 11,
      "nombre" : "LENGUA",
      "descripcion": "Lengua castellana",
      "idCurso": 2
    },
    {
      "id": 12,
      "nombre" : "EF",
      "descripcion": "Educacion física",
      "idCurso": 2
    }
  ]
  constructor() {}

  getAsignaturas(){
    return this.asignaturas
  }

}

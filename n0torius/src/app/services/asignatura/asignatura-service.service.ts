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
      "idCurso": 1
    },
    {
      "id": 2,
      "nombre" : "PG",
      "descripcion":"Programación" ,

      "idCurso": 1
    },
    {
      "id": 3,
      "nombre" : "LM",
      "descripcion":"Lenguajes de marcas",
      "idCurso": 1
    },
    {
      "id": 4,
      "nombre" : "SINF",
      "descripcion": "Sistemas informaticos",
      "idCurso": 1
    },
    {
      "id": 5,
      "nombre" : "AD",
      "descripcion":"Acceso a datos",
      "idCurso": 2
    },
    {
      "id": 6,
      "nombre" : "DI",
      "descripcion": "Diseño de interfaces",
      "idCurso": 2
    },
    {
      "id": 7,
      "nombre" : "PSP_PMDM",
      "descripcion": "Android",
      "idCurso": 2
    },
    {
      "id": 8,
      "nombre" : "SGE",
      "descripcion": "Sistemas de gestión empresarial",
      "idCurso": 2
    },
    {
      "id": 9,
      "nombre" : "FISICA",
      "descripcion": "Fisica",
      "idCurso": 3
    },
    {
      "id": 10,
      "nombre" : "MATES",
      "descripcion": "Matematicas",
      "idCurso": 3
    },
    {
      "id": 11,
      "nombre" : "LENGUA",
      "descripcion": "Lengua castellana",
      "idCurso": 3
    },
    {
      "id": 12,
      "nombre" : "EF",
      "descripcion": "Educacion física",
      "idCurso": 3
    }
  ]
  constructor() {}

  getAsignaturas(){
    return this.asignaturas
  }

}

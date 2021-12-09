import { Injectable } from '@angular/core';
import { Examen } from 'src/app/models/examen/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenServiceService {

  examenes : Examen[] = [
    {
      "id": 0,
      "nombre": "Tema 1",
      "idCurso": 1,
      "idAsignatura": 4,
      "nota" : 5,
      "opinionesSobreElExamen" : "Podría haber hecho muchísimo más",
      "valoracionDelProfesor" : "Me tengo que centrar mas en clase"
    },{
      "id": 1,
      "nombre": "Tema 2",
      "idCurso": 1,
      "idAsignatura": 4,
    },{
      "id": 2,
      "nombre": "Tema 3",
      "idCurso": 1,
      "idAsignatura": 4,
      "nota" : 9
    },{
      "id": 3,
      "nombre": "Tema 4",
      "idCurso": 1,
      "idAsignatura": 5
    },{
      "id": 4,
      "nombre": "Tema 5",
      "idCurso": 1,
      "idAsignatura": 6
    },{
      "id": 5,
      "nombre": "Tema 6",
      "idCurso": 1,
      "idAsignatura": 6
    }
  ]

  constructor() { }

  getExamenes(){
    return this.examenes
  }
  addExamen(examenNuevo : Examen){
    this.examenes.push(examenNuevo)
  }
  borrarExamen(idExamen : number){
    this.examenes.splice(idExamen, 1)
  }
}

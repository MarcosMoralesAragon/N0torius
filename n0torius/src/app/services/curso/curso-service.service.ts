import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso/curso';
import { Observable, of } from 'rxjs';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  cursoQueMostrar
  cursoCounter: number = 0;
  cursos: Curso[] = [
    {
        "id": 0,
        "nombre": "1ºDAM"
    },
    {
        "id": 1,
        "nombre": "2ºDAM"
    },{
        "id": 2,
        "nombre": "2ºBach"
    }
]

  constructor() {
    
  }

  getCursos(){
    return this.cursos
  }
  setCursoVer(id: number){
    this.cursoQueMostrar = id; 
  }
  addCurso(curso : Curso){
    this.getCursos().push(curso)
  }
  getCursoVer(){
    return this.cursoQueMostrar
  }
  getNombreCurso(id:number){
    var curso:Curso = this.getCursos().find(curso => curso.id == id)
    return curso.nombre
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from 'src/app/models/curso/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  cursoQueMostrar
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

  constructor(private http:HttpClient) { 
    // this.http.get<Curso[]>("../../../assets/data/cursos.json").subscribe(data => this.cursos = data);
    // console.log(this.cursos)
  }

  getCursos(){
    return this.cursos
  }
  setCursoVer(id: number){
    this.cursoQueMostrar = id; 
  }
  getCursoVer(){
    return this.cursoQueMostrar
  }
  getNombreCurso(id:number){
    var curso:Curso = this.getCursos().find(curso => curso.id == id)
    return curso.nombre
  }
}

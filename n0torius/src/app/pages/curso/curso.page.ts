import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { CursoServiceService } from 'src/app/services/curso/curso-service.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  asignaturas: Asignatura[] = []
  nombreCurso: string = ""

  constructor(private activatedRoute: ActivatedRoute, private asignaturaService:AsignaturaServiceService, private cursoService: CursoServiceService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.asignaturas = this.asignaturaService.getAsignaturas().filter(curso => curso.idCurso == +id)
    this.nombreCurso = this.cursoService.getNombreCurso(+id)
    console.log(this.asignaturas)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { ExamenServiceService } from 'src/app/services/examen/examen-service.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  asignatura : Asignatura

  constructor(private activatedRoute:ActivatedRoute, 
              private asignaturaService : AsignaturaServiceService,
              private examenService : ExamenServiceService) { }

  ngOnInit() {
    var idAsignatura = this.activatedRoute.snapshot.paramMap.get('id')
    this.asignatura = this.asignaturaService.getAsignaturas().find(asignatura => asignatura.id == +idAsignatura)
    console.log(this.asignatura)
  }

}

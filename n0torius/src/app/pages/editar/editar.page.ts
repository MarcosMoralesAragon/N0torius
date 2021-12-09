import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { Examen } from 'src/app/models/examen/examen';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { ExamenServiceService } from 'src/app/services/examen/examen-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  examen : Examen
  valorCampos = []
  asignaturas : Asignatura[] = []

  constructor(private activatedRoute:ActivatedRoute,
              private route:Router,
              private examenService: ExamenServiceService,
              private asignaturaService : AsignaturaServiceService,) { }

  volver(){
    this.route.navigateByUrl('examen/' + this.examen.id)
  }
  editar(){
    this.examen.nombre = this.valorCampos[0]
    this.examen.idAsignatura = this.valorCampos[1]
    this.examen.nota = this.valorCampos[2]
    this.examen.opinionesSobreElExamen = this.valorCampos[3]
    this.examen.valoracionDelProfesor = this.valorCampos[4]
    this.examenService.borrarExamen(this.examen.id)
    this.examenService.addExamen(this.examen)
    this.route.navigateByUrl('curso/' + this.examen.idCurso)
  }

  ngOnInit() {
    var idExamen = this.activatedRoute.snapshot.paramMap.get('id')
    this.examen = this.examenService.getExamenes().find(examen => examen.id == +idExamen)
    this.asignaturas = this.asignaturaService.getAsignaturas().filter(asignatura => asignatura.idCurso == this.examen.idCurso)
    this.valorCampos[0] = this.examen.nombre
    this.valorCampos[1] = this.examen.idAsignatura
    this.valorCampos[2] = this.examen.nota
    this.valorCampos[3] = this.examen.opinionesSobreElExamen
    this.valorCampos[4] = this.examen.valoracionDelProfesor
  }

}

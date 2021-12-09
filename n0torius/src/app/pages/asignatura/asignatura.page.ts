import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { Examen } from 'src/app/models/examen/examen';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { ExamenServiceService } from 'src/app/services/examen/examen-service.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  asignatura : Asignatura
  examenes : Examen[]

  constructor(private activatedRoute:ActivatedRoute, 
              private asignaturaService : AsignaturaServiceService,
              private examenService : ExamenServiceService,
              private router : Router) { }

  suspenso(numero : number){
    if(numero < 5) { return true}
  }
  cinco(numero : number){
    if(numero == 5) { return true}
  }
  bien(numero : number){
    if(numero == 6) {return true}
  }
  notable(numero : number){
    if((numero > 6) && (numero < 9)) {return true}
  }
  sobreSaliente(numero : number){
    if(numero >= 9) {return true}
  }

  irAExamen(idExamen : number){
    this.router.navigateByUrl('/examen/' + idExamen)
  }

  ngOnInit() {
    var idAsignatura = this.activatedRoute.snapshot.paramMap.get('id')
    this.asignatura = this.asignaturaService.getAsignaturas().find(asignatura => asignatura.id == +idAsignatura)
    this.examenes = this.examenService.getExamenes().filter(examen => examen.idAsignatura == this.asignatura.id)
  }

}

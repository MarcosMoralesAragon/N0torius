import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { Examen } from 'src/app/models/examen/examen';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { ExamenServiceService } from 'src/app/services/examen/examen-service.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {

  examen : Examen
  asignatura : Asignatura

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private examenService : ExamenServiceService,
              private asignaturaService : AsignaturaServiceService,
              private alertController : AlertController) { }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Borrar',
      message: 'Va a borrar este examen. ¿Esta seguro?',
      buttons: [{
        text : 'Borrar',
        role : 'borrar'
      }],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    if(role == 'borrar'){
      this.borrar()
    }
  }
  borrar(){
    this.examenService.borrarExamen(this.examen.id)
    this.router.navigateByUrl('curso/' + this.asignatura.idCurso)
  }
  editar(){
    this.router.navigateByUrl('editar/' + this.examen.id)
  }

  ngOnInit() {
    console.log('carga')
    var idExamen = this.activatedRoute.snapshot.paramMap.get('id')
    this.examen = this.examenService.getExamenes().find(examen => examen.id == +idExamen)
    this.asignatura = this.asignaturaService.getAsignaturas().find(asignatura => asignatura.id == this.examen.idAsignatura)
  }
}

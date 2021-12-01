import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

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
  idCurso;

  constructor(private activatedRoute: ActivatedRoute, 
              private asignaturaService:AsignaturaServiceService,
              private cursoService: CursoServiceService,
              public actionSheetController: ActionSheetController,
              private router:Router) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Listar',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Asignaturas',
        role: 'text',
        icon: 'book',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Tareas',
        icon: 'pencil',
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  volverHome(){
    this.router.navigateByUrl('/home')
  }
  irACrear(){
    this.router.navigateByUrl('/crear/'+  this.idCurso)
  }

  ngOnInit() {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id')
    this.asignaturas = this.asignaturaService.getAsignaturas().filter(curso => curso.idCurso == +this.idCurso)
    this.nombreCurso = this.cursoService.getNombreCurso(+this.idCurso)
    console.log(this.asignaturas)
  }
}

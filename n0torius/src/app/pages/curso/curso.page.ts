import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';

import { Asignatura } from 'src/app/models/asignatura/asignatura';
import { Examen } from 'src/app/models/examen/examen';
import { AsignaturaServiceService } from 'src/app/services/asignatura/asignatura-service.service';
import { CursoServiceService } from 'src/app/services/curso/curso-service.service';
import { ExamenServiceService } from 'src/app/services/examen/examen-service.service';
import { ListaService } from 'src/app/services/lista/lista.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit,AfterViewInit {

  asignaturas: Asignatura[] = []
  examenes: Examen[] = []
  nombreCurso: string = ""
  idCurso;

  constructor(private activatedRoute: ActivatedRoute, 
              private asignaturaService:AsignaturaServiceService,
              private cursoService: CursoServiceService,
              public actionSheetController: ActionSheetController,
              private router:Router,
              private listaService : ListaService,
              private examenService: ExamenServiceService ) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Listar',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Asignaturas',
        role: 'text',
        icon: 'book',
        handler: () => {
          this.irALista("Asignaturas")
        }
      }, {
        text: 'Examenes',
        icon: 'pencil',
        handler: () => {
          this.irALista("Examenes")
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

  irALista(string : string){
    this.listaService.establecerQueListar(string)
    this.router.navigateByUrl('/lista/' + this.idCurso)
  }

  volverHome(){
    this.router.navigateByUrl('/home')
  }
  irACrear(){
    this.router.navigateByUrl('/crear/'+  this.idCurso)
  }
  irAAsignatura(idAsignatura : number){
    this.router.navigateByUrl('/asignatura/' + idAsignatura)
  }
  nombreAsignatura(id : number){
    var asignatura: Asignatura []
    asignatura = this.asignaturas.filter(asignatura => asignatura.id == id)
    return asignatura[0].descripcion
  }
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.asignaturas = this.asignaturaService.getAsignaturas().filter(curso => curso.idCurso == +this.idCurso)
      this.examenes = this.examenService.getExamenes().filter(examen => examen.idCurso == this.idCurso).reverse()
      console.log('Async operation has ended');
      event.target.complete();
      console.log(this.asignaturas)
    }, 0);
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id')
    this.nombreCurso = this.cursoService.getNombreCurso(+this.idCurso)
    this.examenes = this.examenService.getExamenes().filter(examen => examen.idCurso == this.idCurso).reverse()
    this.asignaturas = this.asignaturaService.getAsignaturas().filter(curso => curso.idCurso == +this.idCurso)
  }
}

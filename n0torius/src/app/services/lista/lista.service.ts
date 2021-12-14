import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  queListar : string

  constructor() { }

  establecerQueListar( string : string){
    this.queListar = string
  }
  saberQueListar(){
    return this.queListar
  }
}

import { Component } from "@angular/core";

@Component(
    {
        selector:"app-personas",
        templateUrl:"./personas.component.html"
    }
)
export class PersonasComponent{
  deshabilitarElemento:boolean = false;
  mensaje:string = "No existen dependencias en este item";
  titulo:string = '';
  mostrarTexto:boolean = false;


  agregarPersona(){
    this.mostrarTexto = true;
  }

  modificarTitulo(evento:Event){
    this.titulo = (<HTMLInputElement> evento.target).value;
  }

}

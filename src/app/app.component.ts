import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola_mundo';
  mostrar_home:boolean = true;
  mostrar_app_calculadora = false;
  mostrar_app_personas:boolean = false;
  mostrar_app_ejercicio_lista_personas:boolean = false;
  mostrar_app_calculadora_modularizada:boolean = false;

  variableDePrueba = 'Hola, me estoy mostrando';


  mostrarHome():void{
        this.mostrar_home = true;
        this.mostrar_app_personas = false;
        this.mostrar_app_ejercicio_lista_personas = false;
        this.mostrar_app_calculadora = false;
        this.mostrar_app_calculadora_modularizada = false;
  }

  mostrarCalculadora():void{
    this.mostrar_home = false;
    this.mostrar_app_personas = false;
    this.mostrar_app_ejercicio_lista_personas = false;
    this.mostrar_app_calculadora = true;
    this.mostrar_app_calculadora_modularizada = false;
  }

  mostrarListaPersonas():void{
    this.mostrar_home = false;
    this.mostrar_app_personas = false;
    this.mostrar_app_ejercicio_lista_personas = true;
    this.mostrar_app_calculadora = false;
    this.mostrar_app_calculadora_modularizada = false;
  }

  mostrarCalculadoraModularizada():void{
    this.mostrar_home = false;
    this.mostrar_app_personas = false;
    this.mostrar_app_ejercicio_lista_personas = false;
    this.mostrar_app_calculadora = false;
    this.mostrar_app_calculadora_modularizada = true;
  }
}


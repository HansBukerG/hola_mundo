import { Component, OnInit } from '@angular/core';
import { personasServicio } from '../personasServicio.service';
import { Persona2 } from './ejercicio-lista-personas-clases.component';

@Component({
  selector: 'app-ejercicio-lista-personas',
  templateUrl: './ejercicio-lista-personas.component.html',
  styleUrls: ['./ejercicio-lista-personas.component.css'],
  providers: [personasServicio]
})
export class EjercicioListaPersonasComponent implements OnInit {
  listaPersonas:Array<Persona2>;


  constructor(private servicioListaPersona:personasServicio){

  }
  ngOnInit(): void {
    this.listaPersonas = this.servicioListaPersona.listaPersonas;
  }
  /*
  personaAgregada(persona:Persona2){
    this.logginService.enviaMensajeAConsola('Valor ingresado: ' + persona.nombre);
    //this.listaPersonas.push(persona);
    //this.servicioListaPersona.agregarPersona(persona);
  }*/
}

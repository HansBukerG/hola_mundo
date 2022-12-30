import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.class.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{

  constructor(){}

  nombre = 'Hans';
  apellido:string = 'Buker';
  edad: number = 28;

  energumen:Persona = new Persona(this.nombre,this.apellido,this.edad);

  nombre2 = this.energumen._nombre;

 // escuchador2 = escuchador.value;

}



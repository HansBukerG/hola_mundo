import { Component } from '@angular/core';
import { Persona2 } from '../ejercicio-lista-personas/ejercicio-lista-personas-clases.component';
import { personasServicio } from '../personasServicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  //@Output() personaCreada = new EventEmitter<Persona2>()
  nombre:string = '';
  apellido:string = '';
  campoNombre:boolean = false;
  campoApellido:boolean = false;

  constructor(private personaService:personasServicio){
    this.personaService.saludar.subscribe(
        (indice:number) => alert('indice: ' + indice)
    );

  }

  comprobarCampo(){
    if (this.nombre.trim().length == 0) {
      this.campoNombre = true;
    }
    else{
      this.campoNombre = false;
    }
    if (this.apellido.trim().length == 0) {
      this.campoApellido = true;
    }
    else{
      this.campoApellido = false;
    }
  }

  agregarPersona(){

    if (this.campoNombre == false
      && this.campoApellido == false) {
      let persona:Persona2 = new Persona2(this.nombre,this.apellido);
      this.campoNombre = false;
      this.campoApellido = false;
      //this.personaCreada.emit(persona);
      this.personaService.agregarPersona(persona);
    }

  }
}

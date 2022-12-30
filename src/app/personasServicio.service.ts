import { createInjectableType } from "@angular/compiler";
import { EventEmitter, Injectable } from "@angular/core";
import { Persona2 } from "./ejercicio-lista-personas/ejercicio-lista-personas-clases.component";
import { loggingService } from "./LoggingService.service";

@Injectable()
export class personasServicio{
    listaPersonas:Array<Persona2> = [
      new Persona2('Hans','Buker'),
      new Persona2('Yanny','Gutierrez'),
    ];

    saludar = new EventEmitter<number>();

    constructor(private logginService:loggingService){

    }
    agregarPersona(persona:Persona2){
        //this.logginService.enviaMensajeAConsola(persona.toString());
        this.listaPersonas.push(persona);
      }
}

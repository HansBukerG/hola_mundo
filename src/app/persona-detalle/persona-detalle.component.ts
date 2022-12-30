import { Component, Input } from '@angular/core';
import { Persona2 } from '../ejercicio-lista-personas/ejercicio-lista-personas-clases.component';
import { loggingService } from '../LoggingService.service';
import { personasServicio } from '../personasServicio.service';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent {

  @Input() persona:Persona2;
  @Input() indice:number;

  constructor(private logs:loggingService,private personaServicio:personasServicio){}
  emitirRespuesta(){
    this.logs.enviaMensajeAConsola('detalle persona:' + this.persona.toString());
    this.personaServicio.saludar.emit(this.indice);
  }
}

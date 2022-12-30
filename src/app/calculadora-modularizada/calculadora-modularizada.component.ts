import { Component, Input } from '@angular/core';
import { Calculadora } from '../clases/calculadora.model';

@Component({
  selector: 'app-calculadora-modularizada',
  templateUrl: './calculadora-modularizada.component.html',
  styleUrls: ['./calculadora-modularizada.component.css']
})
export class CalculadoraModularizadaComponent {
  resultado:string;

  capturarMisiva(resultadoEmitido:Calculadora){
    this.resultado = resultadoEmitido.sumarOperandos().toString();
  }
}

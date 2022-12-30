import { Component, EventEmitter, Output } from '@angular/core';
import { Calculadora } from '../clases/calculadora.model';

@Component({
  selector: 'app-formulario-calculadora',
  templateUrl: './formulario-calculadora.component.html',
  styleUrls: ['./formulario-calculadora.component.css']
})
export class FormularioCalculadoraComponent {
  @Output() resultado = new EventEmitter<Calculadora>();

  operandoA:string;
  operandoB:string;

  operandoAError:boolean = false;
  operandoBError:boolean = false;

  verificarCampo(opcion:number){
    switch (opcion) {
      case 1:
        if(this.operandoA.trim().length == 0)
          this.operandoAError = true;
        else
          this.operandoAError = false;

        break;
      case 2:
        if(this.operandoB.trim().length == 0)
          this.operandoBError = true;
        else
          this.operandoBError = false;
        break;
      default:
        break;
    }
  }

  emitirResultado(){
    this.verificarCampo(1);
    this.verificarCampo(2);

    let operandoAEmitir:number = parseInt(this.operandoA);
    let operandoBEmitir:number = parseInt(this.operandoB);

    let resultadoEmitir:Calculadora;

    if (this.operandoAError == false
      && this.operandoBError == false) {
        resultadoEmitir = new Calculadora(operandoAEmitir,operandoBEmitir);
        this.resultado.emit(resultadoEmitir);
    }
  }

}

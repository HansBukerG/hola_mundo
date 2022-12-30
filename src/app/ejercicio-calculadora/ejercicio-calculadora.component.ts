import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-calculadora',
  templateUrl: './ejercicio-calculadora.component.html',
  styleUrls: ['./ejercicio-calculadora.component.css']
})
export class EjercicioCalculadoraComponent {
  operandoA:string = '';
  operandoB:string = '';
  resultadoSuma:string = '';

  constructor(){}

  sumarValores():void{

    let operandoNumberA:number = !isNaN(parseInt(this.operandoA))? parseInt(this.operandoA):0;
    let operandoNumberB:number = !isNaN(parseInt(this.operandoB))? parseInt(this.operandoB):0;
    
    let resultado:number = operandoNumberA + operandoNumberB;

    this.resultadoSuma = resultado.toString();
  }


}

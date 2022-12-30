export class Calculadora{
    private _operandoA: number;

    private _operandoB: number;


    constructor(operandoA:number,operandoB:number){
        this._operandoA = operandoA;
        this._operandoB = operandoB;
    }

    public get operandoB(): number {
        return this._operandoB;
      }
      public set operandoB(value: number) {
        this._operandoB = value;
      }
    public get operandoA(): number {
        return this._operandoA;
      }
      public set operandoA(value: number) {
        this._operandoA = value;
      }

    sumarOperandos(){
        return this._operandoA + this._operandoB;
    }
}

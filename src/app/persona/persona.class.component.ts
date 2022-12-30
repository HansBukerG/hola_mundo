export class Persona{
    _nombre:string;
    _apellido:string;
    _edad: number;

    constructor(nombre:string,apellido:string,edad:number){
      this._nombre = nombre;
      this._apellido = apellido
      this._edad = edad;

    }

    mostrarPersona(){
      return `
              nombre: ${this._nombre}
              apellido: ${this._apellido}
              edad: ${this._edad}
      `
    }
    toString(){
      return this.mostrarPersona();
    }
  }

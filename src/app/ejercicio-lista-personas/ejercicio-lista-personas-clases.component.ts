export class Persona2{
  private _nombre: string;
  private _apellido: string;


  constructor(nombre:string,apellido:string){
    this._nombre = nombre;
    this._apellido = apellido;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get apellido(): string {
    return this._apellido;
  }
  public set apellido(value: string) {
    this._apellido = value;
  }

  toString(){
    return `nombre: ${this.nombre}
              apellido: ${this.apellido}`;
  }


}

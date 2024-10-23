export class Vehiculo {
    id!:number;
	agencia:string;
	modelo:string;
	marca:string;
	patente:string;


    constructor(){
        this.agencia = "";
        this.modelo = "";
        this.marca = "";
        this.patente = "";
    }
}

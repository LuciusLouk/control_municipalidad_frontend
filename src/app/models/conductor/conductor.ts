import { Licencia } from "../licencia/licencia";

export class Conductor {
    id!:number;
	
	apellido:string;
	nombre:String;
	dni:number;
    licencia:Licencia;

    constructor(){
        this.apellido ="";
        this.nombre ="";
        this.dni =0;
        this.licencia = new Licencia();
    }
}

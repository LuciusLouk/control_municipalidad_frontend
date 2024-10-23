import { Conductor } from "../conductor/conductor";
import { Vehiculo } from "../vehiculo/vehiculo";

export class Licencia {
    id:number;
	
	numero:number;
	fechaExpiracion:Date;
	
	vehiculo:Vehiculo;
	conductores:Array<Conductor>;

    constructor(){
        this.id=0;
        this.numero=0;
        this.fechaExpiracion=new Date();
        this.vehiculo=new Vehiculo();
        this.conductores=new Array<Conductor>();
    }
}

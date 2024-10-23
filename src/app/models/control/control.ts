import { Licencia } from "../licencia/licencia";
import { Usuario } from "../usuario/usuario";

export class Control {
    id!:number;
    fecha:Date;
	notaAdicional:string;
	dniFrente:string;
	dniDorso:string;
	carnet:string;

    usuario:Usuario;
    licencia:Licencia;


    constructor() {
        this.fecha=new Date();
        this.notaAdicional='';
        this.dniFrente='';
        this.dniDorso='';
        this.carnet='';
        this.usuario=new Usuario();
        this.licencia=new Licencia();
    }
}

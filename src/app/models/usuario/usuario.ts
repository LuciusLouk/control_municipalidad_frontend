export class Usuario {
    id!:number;
	nombre:string;
	password:string;
	dni:number;

    constructor(){
        this.nombre = '';
        this.password = '';
        this.dni = 0;
    }
}

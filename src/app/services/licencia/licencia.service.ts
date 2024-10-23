import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenciaService {
  hostBase:string;
  constructor(private _http:HttpClient) { 
    this.hostBase ="http://localhost:8080/licencia/";
  }


  public obtenerLicenciaPorNumero(numero:number):Observable<any>{
    return this._http.get(this.hostBase+"numero/"+numero);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Control } from 'src/app/models/control/control';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  
  hostBase:string;
  constructor(private _http:HttpClient) { 
    this.hostBase ="http://localhost:8080/control/";
  }


  registrarControl(obControl: Control):Observable<any> {
    return this._http.post(this.hostBase+"alta",obControl);
  }

  obtenerControles():Observable<any> {
    return this._http.get(this.hostBase+"todos");
  }

}

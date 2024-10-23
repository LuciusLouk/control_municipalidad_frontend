import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  hostBase:string;
  constructor(private _http:HttpClient) { 
    this.hostBase ="http://localhost:8080/";
  }

  public login(nombre:string,password:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      }) 
    }
    let body = JSON.stringify({username:nombre,password:password});
    return this._http.post(this.hostBase+"login",body,httpOption);
  }

}

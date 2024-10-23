import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  obUsuario:Usuario;
  nombre:string;
  password:string;

  constructor(private router:Router,
    private loginService: UsuarioService
  ){
    this.obUsuario = new Usuario();
    this.nombre = "";
    this.password = "";
  }

  login(){
    this.loginService.login(this.nombre,this.password).subscribe(
      response => {
        this.obUsuario = response;
        sessionStorage.setItem("userid",this.obUsuario.id.toString());
        this.router.navigate(["app-form-control"]);
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }


}

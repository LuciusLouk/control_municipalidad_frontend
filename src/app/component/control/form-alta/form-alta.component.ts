import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Control } from 'src/app/models/control/control';
import { Licencia } from 'src/app/models/licencia/licencia';
import { ControlService } from 'src/app/services/control/control.service';
import { LicenciaService } from 'src/app/services/licencia/licencia.service';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent {
  obControl:Control;
  obLicencia:Licencia;
  idUsuario:number;
  numeroLicencia:number;

  files: { base: string, safeurl: SafeUrl }[] = [];
  constructor(private readonly domSanitizer: DomSanitizer,
              private controlService:ControlService,
              private licenciaService:LicenciaService)
  {
    this.obControl = new Control();
    this.obLicencia = new Licencia();
    this.idUsuario = Number(sessionStorage.getItem("userid"));
    this.numeroLicencia=0;
  }
   
  
  registrarControl(){
    this.obControl.usuario.id = this.idUsuario; 
    
    this.obControl.dniFrente = this.files[0].base;
    this.obControl.licencia.numero = this.numeroLicencia;
    console.log("control a registrar",this.obControl);
    
    this.controlService.registrarControl(this.obControl).subscribe({
      next:(response:any) => {
        console.log(response);
      },
      error:(error:any) => {
        console.error(error);
      }
    }
      
    );
  }
  obtenerLicencia(){
    this.licenciaService.obtenerLicenciaPorNumero(this.numeroLicencia).subscribe({
      next:(response:any) => {
        this.obLicencia = response;
      },
      error:(error:any) => {
        console.error(error);
      }
    }
      
    );
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    const file = files[0];
    //inicio lector de archivo
    const reader = new FileReader();
    //declaro el comportamiento del onload cuando el reader carga o lee algo
    reader.onload = () => {
      let base = reader.result as string;
      let safeurl:SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(base);
      this.files.unshift({ 'base': base, 'safeurl': safeurl });

      //Guarda el base64 en foto de perfil
      this.obControl.dniFrente = this.files[0].base;
      if(this.files.length>1){
        this.files.pop();
      } 
    };
    //hago que el reader lea un archivo
    reader.readAsDataURL(file);

  }
}

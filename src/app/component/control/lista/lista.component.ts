import { Component } from '@angular/core';
import { Control } from 'src/app/models/control/control';
import { ControlService } from 'src/app/services/control/control.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  controles:Control[] = []; 

  constructor(private controlService:ControlService){
    this.cargarControles();
  }


  cargarControles(){
    this.controlService.obtenerControles().subscribe({
      next: (response:any) => 
        this.controles = response,
      error: (error: any) => console.error('Error al cargar controles:', error)
    });
  }

}

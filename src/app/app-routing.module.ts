import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAltaComponent } from './component/control/form-alta/form-alta.component';
import { LoginComponent } from './component/login/login.component';
import { ListaComponent } from './component/control/lista/lista.component';

const routes: Routes = [
  
  {path:"app-form-control",component:FormAltaComponent},
  {path:"app-login",component:LoginComponent},
  {path:"app-lista",component:ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

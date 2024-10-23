import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { FormAltaComponent } from './component/control/form-alta/form-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlComponent } from './component/control/control/control.component';
import { LoginComponent } from './component/login/login.component';
import { ListaComponent } from './component/control/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormAltaComponent,
    ControlComponent,
    LoginComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

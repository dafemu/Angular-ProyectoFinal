import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NoEncontradoComponent,
    InicioComponent,
  ],
  imports: [
    SharedModule,
    HttpClientModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    NoEncontradoComponent,
    InicioComponent,
    HttpClientModule,
  ]
})
export class CoreModule { }

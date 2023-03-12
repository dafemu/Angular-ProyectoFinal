import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosModule } from './alumnos/alumnos.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CursosModule } from './cursos/cursos.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlumnosModule,
    SharedModule,
    CursosModule,
    ProfesoresModule,
    AutenticacionModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

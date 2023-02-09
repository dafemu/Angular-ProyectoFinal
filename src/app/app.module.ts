import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ContentComponent } from './componentes/content/content.component';
import { MaterialModule } from './modulos/material.module';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';
import { AgregarAlumnoComponent } from './componentes/agregar-alumno/agregar-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { SizeLetrasDirective } from './directives/size-letras.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    ListadoAlumnosComponent,
    AgregarAlumnoComponent,
    NombreCompletoPipe,
    SizeLetrasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

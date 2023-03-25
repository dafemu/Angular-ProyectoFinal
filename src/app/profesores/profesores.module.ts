import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarProfesorComponent } from './components/agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './components/editar-profesor/editar-profesor.component';
import { ListarProfesorComponent } from './components/listar-profesor/listar-profesor.component';
import { ProfesoresRoutingModule } from './profesores-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AgregarProfesorComponent,
    EditarProfesorComponent,
    ListarProfesorComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    SharedModule
  ]
})
export class ProfesoresModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  exports: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListarCursosComponent,
    CursosRoutingModule,
  ]
})
export class CursosModule { }

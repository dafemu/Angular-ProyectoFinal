import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';



@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListarCursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }

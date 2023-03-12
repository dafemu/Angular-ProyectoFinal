import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
  { path:'', canActivateChild: [SesionGuard], children: [
      { path: 'listar', component: ListarCursosComponent },
      { path: 'agregar', component: AgregarCursoComponent },
      { path: 'editar', component: EditarCursoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

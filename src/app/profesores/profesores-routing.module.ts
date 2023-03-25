import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfesorComponent } from './components/listar-profesor/listar-profesor.component';
import { AgregarProfesorComponent } from './components/agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './components/editar-profesor/editar-profesor.component';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
  { path: '', canActivateChild: [SesionGuard], children:[
    { path: 'listar', component: ListarProfesorComponent },
    { path: 'agregar', component: AgregarProfesorComponent },
    { path: 'editar', component: EditarProfesorComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }

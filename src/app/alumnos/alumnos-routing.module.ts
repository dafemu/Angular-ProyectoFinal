import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';

const routes: Routes = [
  { path:'alumnos', children: [
      { path: 'listar', component: ListadoAlumnosComponent },
      { path: 'agregar', component: AgregarAlumnoComponent },
      { path: 'editar', component:  EditarAlumnoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }

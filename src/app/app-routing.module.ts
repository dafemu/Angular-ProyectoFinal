import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule),
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path:'**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

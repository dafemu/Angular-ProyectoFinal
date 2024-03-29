import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [SesionGuard] },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule),
    canLoad: [SesionGuard],
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)
  },
  {
    path:'profesores',
    loadChildren: () => import('./profesores/profesores.module').then((module) => module.ProfesoresModule),
    canLoad: [SesionGuard],
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path:'**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

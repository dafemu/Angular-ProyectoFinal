import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import * as CursosStateActions from './cursos-state.actions';
import { CursosService } from '../services/cursos.service';
import { Router } from '@angular/router';
import { Curso } from '../models/curso';
@Injectable()
export class CursosStateEffects {

  cargarCursosStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosStateActions.cargarCursosStates),
      concatMap(() => {
        return this.cursosService.obtenerCursos().pipe(
          map((c: Curso[]) => CursosStateActions.cursosCargados({ cursos: c }))
        )
      })
    );
  });

  agregarCursoState$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(CursosStateActions.agregarCursoState),
      concatMap(({curso})=>{
        return this.cursosService.agregarCurso(curso).pipe(
          map((curso: Curso)=>{
            alert(`${curso.nombre} agregado satisfactoriamente`);
            this.router.navigate(['cursos/listar']);
            return CursosStateActions.cargarCursosStates();
          })
        )
      }),
    );
  });

  editarCursoState$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(CursosStateActions.editarCursoState),
      concatMap(({curso})=>{
        return this.cursosService.editarCurso(curso).pipe(
          map((curso: Curso)=>{
            alert(`${curso.nombre} editado satisfactoriamente`);
            return CursosStateActions.cargarCursosStates();
          })
        );
      })
    );
  });

  eliminarCursoState$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(CursosStateActions.eliminarCursoState),
      concatMap(({curso})=>{
        return this.cursosService.eliminarCurso(curso).pipe(
          map((curso: Curso)=>{
            alert(`${curso.nombre} eliminado`);
            return CursosStateActions.cargarCursosStates();
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private cursosService: CursosService,
    private router: Router,
  ) {}
}

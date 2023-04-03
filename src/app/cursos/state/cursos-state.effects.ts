import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import * as CursosStateActions from './cursos-state.actions';
import { CursosService } from '../services/cursos.service';
import { Router } from '@angular/router';
import { Curso } from '../models/curso';
import { agregarCursoState, cargarCursosStates, cursosCargados, editarCursoState, eliminarCursoState } from './cursos-state.actions';
@Injectable()
export class CursosStateEffects {

  cargarCursosStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cargarCursosStates),
      concatMap(() => {
        return this.cursosService.obtenerCursos().pipe(
          map((c: Curso[]) => cursosCargados({ cursos: c }))
        )
      })
    );
  });

  agregarCursoState$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(agregarCursoState),
      concatMap(({curso})=>{
        return this.cursosService.agregarCurso(curso).pipe(
          map((curso: Curso)=>{
            this.router.navigate(['cursos/listar']);
            return cargarCursosStates();
          })
        )
      }),
    );
  });

  editarCursoState$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(editarCursoState),
      concatMap(({curso})=>{
        return this.cursosService.editarCurso(curso).pipe(
          map((curso: Curso)=>{
            return cargarCursosStates();
          })
        );
      })
    );
  });

  eliminarCursoState$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(eliminarCursoState),
      concatMap(({curso})=>{
        return this.cursosService.eliminarCurso(curso).pipe(
          map((curso: Curso)=>{
            return cargarCursosStates();
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

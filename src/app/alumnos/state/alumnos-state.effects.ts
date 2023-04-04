import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import * as AlumnosStateActions from './alumnos-state.actions';
import { Router } from '@angular/router';
import { Alumno } from '../interfaces/alumno';
import { AlumnosService } from '../services/alumnos.service';

@Injectable()
export class AlumnosStateEffects {

  cargarAlumnosStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosStateActions.cargarAlumnosStates),
      concatMap(() => {
        return this.alumnosService.obtenerAlumnos().pipe(
          map((alum: Alumno[])=> {
            return AlumnosStateActions.alumnosCargados({alumnos: alum})
          }),
        )
      })
    );
  });

  agregarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AlumnosStateActions.agregarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnosService.agregarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                      alert(`${alumno.nombre} agregado satisfactoriamente`);
                      return AlumnosStateActions.cargarAlumnosStates();
                    })
                )
            })
        );
    });

    eliminarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AlumnosStateActions.eliminarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnosService.eliminarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                      alert(`${alumno.nombre} eliminado`);
                      return AlumnosStateActions.cargarAlumnosStates();
                    })
                )
            })
        )
    });

    editarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AlumnosStateActions.editarAlumnoState),
            concatMap(({ alumno }) => {
                return this.alumnosService.editarAlumno(alumno).pipe(
                    map((alumno: Alumno) => {
                      this.router.navigate(['alumnos/listar']);
                      return AlumnosStateActions.cargarAlumnosStates();
                    })
                )
            })
        );
    });

  constructor(
    private actions$: Actions,
    private alumnosService: AlumnosService,
    private router: Router,
  ) {}
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnosState from './alumnos-state.reducer';

export const selectAlumnosState = createFeatureSelector<fromAlumnosState.AlumnosState>(
  fromAlumnosState.alumnosStateFeatureKey
);

export const selectorCargandoAlumnos = createSelector(
  selectAlumnosState,
  (state: fromAlumnosState.AlumnosState) => state.cargando
);

export const selectorAlumnosCargados = createSelector(
  selectAlumnosState,
  (state: fromAlumnosState.AlumnosState) => state.alumnos
);

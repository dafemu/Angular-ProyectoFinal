import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursosState from './cursos-state.reducer';

export const selectCursosState = createFeatureSelector<fromCursosState.CursoState>(
  fromCursosState.cursosStateFeatureKey
);

export const selectorCargandoCursos = createSelector(
  selectCursosState,
  (state: fromCursosState.CursoState) => state.cargando
);

export const selectorCursosCargados = createSelector(
  selectCursosState,
  (state: fromCursosState.CursoState) => state.cursos
);

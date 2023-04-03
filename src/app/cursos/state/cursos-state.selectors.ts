import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursosState from './cursos-state.reducer';

export const selectCursosStateState = createFeatureSelector<fromCursosState.State>(
  fromCursosState.cursosStateFeatureKey
);

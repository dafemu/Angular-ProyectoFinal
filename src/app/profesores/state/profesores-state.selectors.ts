import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProfesoresState from './profesores-state.reducer';

export const selectProfesoresStateState = createFeatureSelector<fromProfesoresState.State>(
  fromProfesoresState.profesoresStateFeatureKey
);

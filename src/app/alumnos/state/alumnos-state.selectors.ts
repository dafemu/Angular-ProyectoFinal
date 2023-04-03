import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnosState from './alumnos-state.reducer';

export const selectAlumnosStateState = createFeatureSelector<fromAlumnosState.State>(
  fromAlumnosState.alumnosStateFeatureKey
);

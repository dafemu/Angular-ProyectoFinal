import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthState from './auth-state.reducer';

export const selectAuthStateState = createFeatureSelector<fromAuthState.State>(
  fromAuthState.authStateFeatureKey
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthState from './auth-state.reducer';

export const selectAuthState = createFeatureSelector<fromAuthState.AuthState>(
  fromAuthState.authStateFeatureKey
);

export const selectSesionState = createSelector(
  selectAuthState,
  (state) => state.sesion
);

export const selectSesionActiva = createSelector(
  selectAuthState,
  (state) => state.sesion.sesionActiva
);

export const selectUsuarioActivo = createSelector(
  selectAuthState,
  (state) => state.sesion.usuarioActivo
);

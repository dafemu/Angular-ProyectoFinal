import { createFeature, createReducer, on } from '@ngrx/store';
import * as AuthStateActions from './auth-state.actions';
import { Sesion } from 'src/app/core/models/sesion';

export const authStateFeatureKey = 'authState';

export interface AuthState {
  sesion: Sesion
}

export const initialState: AuthState = {
  sesion: {
    sesionActiva: false
  }
};

export const reducer = createReducer(
  initialState,
  on(AuthStateActions.cargarAuthStates, (state) => {
    return {...state, sesion: { sesionActiva: true }};
  }),
  on(AuthStateActions.cargarSesion, (state, {sesion})=>{
    return {...state, sesion: {
        sesionActiva: true,
        usuarioActivo: sesion.usuarioActivo
      }
    }
  }),
);

export const authStateFeature = createFeature({
  name: authStateFeatureKey,
  reducer,
});


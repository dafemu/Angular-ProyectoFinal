import { createAction, props } from '@ngrx/store';
import { Sesion } from 'src/app/core/models/sesion';

export const cargarAuthStates = createAction(
  '[AuthState] Cargar AuthStates'
);

export const cargarSesion = createAction(
  '[AuthState] Sesion Cargada',
  props<{ sesion: Sesion }>()
);

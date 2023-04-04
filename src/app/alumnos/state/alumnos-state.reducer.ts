import { createFeature, createReducer, on } from '@ngrx/store';
import * as AlumnosStateActions from './alumnos-state.actions';
import { Alumno } from '../interfaces/alumno';

export const alumnosStateFeatureKey = 'alumnosState';

export interface AlumnosState {
  cargando: boolean;
  alumnos: Alumno[];
}

export const initialState: AlumnosState = {
  cargando: false,
  alumnos: []
};

export const reducer = createReducer(
  initialState,
  on(AlumnosStateActions.cargarAlumnosStates, (state) => {
    return { ...state, cargando:true }
  }),
  on(AlumnosStateActions.alumnosCargados, (state, { alumnos }) => {
    return {...state, cargando: false, alumnos};
  }),
  on(AlumnosStateActions.agregarAlumnoState, (state, { alumno }) => {
    return state;
  }),
  on(AlumnosStateActions.editarAlumnoState, (state, { alumno }) => {
    return state;
  }),
  on(AlumnosStateActions.eliminarAlumnoState, (state, { alumno }) => {
    return state;
  }),
);

export const alumnosStateFeature = createFeature({
  name: alumnosStateFeatureKey,
  reducer,
});


import { createFeature, createReducer, on } from '@ngrx/store';
import * as CursosStateActions from './cursos-state.actions';
import { Curso } from '../models/curso';

export const cursosStateFeatureKey = 'cursosState';

export interface CursoState {
  cargando: boolean;
  cursos: Curso[];
}

export const initialState: CursoState = {
  cargando: false,
  cursos: []
};

export const reducer = createReducer(
  initialState,
  on(CursosStateActions.cargarCursosStates, (state) => {
    return { ...state, cargando: true };
  }),
  on(CursosStateActions.cursosCargados, (state, { cursos }) =>{
    return { ...state, cargando: false, cursos };
  }),
  on(CursosStateActions.agregarCursoState, (state, {curso})=>{
    return state;
  }),
  on(CursosStateActions.editarCursoState, (state, {curso})=>{
    return state;
  }),
  on(CursosStateActions.eliminarCursoState, (state, {curso})=>{
    return state;
  }),
);

export const cursosStateFeature = createFeature({
  name: cursosStateFeatureKey,
  reducer,
});


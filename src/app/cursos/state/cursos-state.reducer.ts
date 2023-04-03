import { createFeature, createReducer, on } from '@ngrx/store';
import * as CursosStateActions from './cursos-state.actions';

export const cursosStateFeatureKey = 'cursosState';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(CursosStateActions.cargarCursosStates, state => state),

);

export const cursosStateFeature = createFeature({
  name: cursosStateFeatureKey,
  reducer,
});


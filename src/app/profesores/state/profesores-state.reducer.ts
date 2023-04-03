import { createFeature, createReducer, on } from '@ngrx/store';
import * as ProfesoresStateActions from './profesores-state.actions';

export const profesoresStateFeatureKey = 'profesoresState';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(ProfesoresStateActions.cargarProfesoresStates, state => state),

);

export const profesoresStateFeature = createFeature({
  name: profesoresStateFeatureKey,
  reducer,
});


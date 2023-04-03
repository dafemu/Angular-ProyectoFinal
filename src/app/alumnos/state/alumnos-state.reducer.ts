import { createFeature, createReducer, on } from '@ngrx/store';
import * as AlumnosStateActions from './alumnos-state.actions';

export const alumnosStateFeatureKey = 'alumnosState';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(AlumnosStateActions.cargarAlumnosStates, state => state),

);

export const alumnosStateFeature = createFeature({
  name: alumnosStateFeatureKey,
  reducer,
});


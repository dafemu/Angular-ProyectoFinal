import { createFeature, createReducer, on } from '@ngrx/store';
import * as AuthStateActions from './auth-state.actions';

export const authStateFeatureKey = 'authState';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(AuthStateActions.cargarAuthStates, state => state),

);

export const authStateFeature = createFeature({
  name: authStateFeatureKey,
  reducer,
});


import * as fromAuthState from './auth-state.reducer';
import { selectAuthStateState } from './auth-state.selectors';

describe('AuthState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAuthStateState({
      [fromAuthState.authStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

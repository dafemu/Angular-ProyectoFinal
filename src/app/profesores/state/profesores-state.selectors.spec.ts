import * as fromProfesoresState from './profesores-state.reducer';
import { selectProfesoresStateState } from './profesores-state.selectors';

describe('ProfesoresState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProfesoresStateState({
      [fromProfesoresState.profesoresStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

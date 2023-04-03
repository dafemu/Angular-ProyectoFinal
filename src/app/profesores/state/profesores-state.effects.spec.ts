import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProfesoresStateEffects } from './profesores-state.effects';

describe('ProfesoresStateEffects', () => {
  let actions$: Observable<any>;
  let effects: ProfesoresStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfesoresStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProfesoresStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

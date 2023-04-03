import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuthStateEffects } from './auth-state.effects';

describe('AuthStateEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuthStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

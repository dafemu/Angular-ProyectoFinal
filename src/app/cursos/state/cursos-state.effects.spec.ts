import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CursosStateEffects } from './cursos-state.effects';

describe('CursosStateEffects', () => {
  let actions$: Observable<any>;
  let effects: CursosStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CursosStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CursosStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

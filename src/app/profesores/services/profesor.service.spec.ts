import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProfesorService } from './profesor.service';

describe('ProfesorService', () => {
  let service: ProfesorService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProfesorService(httpClientSpy as any);
    // service = TestBed.inject(ProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

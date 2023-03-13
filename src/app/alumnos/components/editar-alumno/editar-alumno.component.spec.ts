import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosService } from '../../services/alumnos.service';

import { EditarAlumnoComponent } from './editar-alumno.component';

describe('EditarAlumnoComponent', () => {
  let component: EditarAlumnoComponent;
  let fixture: ComponentFixture<EditarAlumnoComponent>;

  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRoute: ActivatedRoute;
  let alumnosServiceSpy: jasmine.SpyObj<AlumnosService>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    alumnosServiceSpy = jasmine.createSpyObj('AlumnosService', ['editarAlumno']);

    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoComponent ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {
          paramMap: of({ get: (key: string) => '1' }) // Simulamos un parámetro con valor 1
        } },
        { provide: Router, useValue: routerSpy },
        { provide: AlumnosService, useValue: alumnosServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

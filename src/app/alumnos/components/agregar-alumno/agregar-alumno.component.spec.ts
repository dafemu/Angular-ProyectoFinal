import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { AgregarAlumnoComponent } from './agregar-alumno.component';

describe('AgregarAlumnoComponent', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoComponent ],
      imports: [
        SharedModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario se mantiene cuando dejamos los campos requeridos vacios', () => {
    const formulario = component.formAgregarAlumno;

    const id = formulario.controls['id'];
    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const edad = formulario.controls['edad'];
    const curso = formulario.controls['curso'];

    id.setValue('12345');
    nombre.setValue('David');
    apellido.setValue('Munoz');
    edad.setValue(29);
    curso.setValue('Angular');

    expect(formulario.valid).toBeTrue();
  });

});

import { createAction, props } from '@ngrx/store';
import { Alumno } from '../interfaces/alumno';

export const cargarAlumnosStates = createAction(
  '[AlumnosState] Cargar AlumnosStates'
);

export const alumnosCargados = createAction(
  '[AlumnosState] Alumnos Cargados',
  props<{alumnos : Alumno[]}>()
);

export const agregarAlumnoState = createAction(
  '[AlumnosState] Agregar Alumno',
  props<{ alumno: Alumno }>()
);

export const editarAlumnoState = createAction(
  '[AlumnosState] Editar Alumno',
  props<{ alumno: Alumno }>()
);

export const eliminarAlumnoState = createAction(
  '[AlumnosState] Eliminar Alumno',
  props<{ alumno: Alumno }>()
);


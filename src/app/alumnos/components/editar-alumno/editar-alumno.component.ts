import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../interfaces/alumno';
import { AlumnosState } from '../../state/alumnos-state.reducer';
import { Store } from '@ngrx/store';
import { editarAlumnoState } from '../../state/alumnos-state.actions';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  formularioEditarAlumno!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alumnosService: AlumnosService,
    private store: Store<AlumnosState>,
  ){ }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.formularioEditarAlumno = new FormGroup({
        id: new FormControl(params.get('id')),
        nombre: new FormControl(params.get('nombre')),
        apellido: new FormControl(params.get('apellido')),
        edad: new FormControl(params.get('edad')),
        curso: new FormControl(params.get('curso')),
        activo: new FormControl(params.get('activo')),
      });
    });
  }

  editarAlumno(){
    let alumno = {
      id: this.formularioEditarAlumno.value.id,
      nombre: this.formularioEditarAlumno.value.nombre,
      apellido: this.formularioEditarAlumno.value.apellido,
      edad: this.formularioEditarAlumno.value.edad,
      curso: this.formularioEditarAlumno.value.curso,
      activo: this.formularioEditarAlumno.value.activo,
    };

    this.store.dispatch(editarAlumnoState({alumno}));
  }

}

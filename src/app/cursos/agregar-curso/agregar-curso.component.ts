import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/profesores/models/profesor';
import { CursosService } from '../services/cursos.service';
import { ProfesorService } from 'src/app/profesores/services/profesor.service';
import { Curso } from '../models/curso';
import { Router } from '@angular/router';
import { CursoState } from '../state/cursos-state.reducer';
import { Store } from '@ngrx/store';
import { agregarCursoState } from '../state/cursos-state.actions';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  formularioAgregarCurso!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursoService: CursosService,
    private profesorService: ProfesorService,
    private router: Router,
    private store: Store<CursoState>
  ){}

  ngOnInit(): void {
    this.profesores$ = this.profesorService.obtenerProfesores();
    this.formularioAgregarCurso = new FormGroup({
      comision : new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl(false),
      nombre: new FormControl('', [Validators.required]),
      profesor: new FormControl({}, [Validators.required]),
    });
  }

  agregarCurso(){
    let curso: Curso = {
      id: '',
      nombre: this.formularioAgregarCurso.value.nombre,
      comision: this.formularioAgregarCurso.value.comision,
      fechaInicio: this.formularioAgregarCurso.value.fechaInicio,
      fechaFin: this.formularioAgregarCurso.value.fechaFin,
      inscripcionAbierta: this.formularioAgregarCurso.value.inscripcionAbierta,
      profesor: this.formularioAgregarCurso.value.profesor
    }

    this.store.dispatch(agregarCursoState({curso}));
  }
}

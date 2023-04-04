import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/profesores/models/profesor';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';
import { ProfesorService } from '../../profesores/services/profesor.service';
import { Store } from '@ngrx/store';
import { CursoState } from '../state/cursos-state.reducer';
import { editarCursoState } from '../state/cursos-state.actions';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit{
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursoService: CursosService,
    private profesorService: ProfesorService,
    private store: Store<CursoState>,
    private dialogRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ){}

  ngOnInit(): void {
    this.profesores$ = this.profesorService.obtenerProfesores();
    this.formulario = new FormGroup({
      comision: new FormControl(this.curso.comision),
      fechaFin: new FormControl(this.curso.fechaFin),
      fechaInicio: new FormControl(this.curso.fechaInicio),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
      nombre: new FormControl(this.curso.nombre),
      profesor: new FormControl(this.curso.profesor)
    })
  }

  editarCurso(){
    let curso: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor
    };
    this.store.dispatch(editarCursoState({curso}));
    this.dialogRef.close(curso);
  }

}

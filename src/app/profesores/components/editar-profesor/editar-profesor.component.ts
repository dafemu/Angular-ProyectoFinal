import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../models/profesor';
import { Observable } from 'rxjs';
import { Curso } from '../../../../../../Redux-ngrx/src/app/models/curso';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent {
  formularioProfesor!: FormGroup;
  cursos$!: Observable<Curso[]>;

  constructor(
    private profesorService: ProfesorService,
    private cursoService: CursosService,
    private dialogRef: MatDialogRef<EditarProfesorComponent>,
    @Inject(MAT_DIALOG_DATA) public profesor: Profesor
  ){}

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.formularioProfesor = new FormGroup({
      nombre: new FormControl(this.profesor.nombre),
      correo: new FormControl(this.profesor.correo),
      cursos: new FormControl(this.profesor.cursos)
    })
  }

  editarProfesor(){
    let profesor: Profesor = {
      id: this.profesor.id,
      nombre: this.formularioProfesor.value.nombre,
      correo: this.formularioProfesor.value.correo,
      cursos: this.formularioProfesor.value.cursos
    };

    this.profesorService.editarProfesor(profesor).subscribe((profesor: Profesor) => {
      this.dialogRef.close(profesor);
    });
  }
}

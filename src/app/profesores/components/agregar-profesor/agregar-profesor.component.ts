import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { CursosService } from '../../../cursos/services/cursos.service';
import { ProfesorService } from '../../services/profesor.service';
import { Router } from '@angular/router';
import { Profesor } from '../../models/profesor';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent {
  formularioProfesor!:FormGroup;
  cursos$!:Observable<Curso[]>;

  constructor(
    private cursosService: CursosService,
    private profesorService: ProfesorService,
    private router: Router
  ){}

  ngOnInit(): void {
    let soloNumerosRegex:string = '^[1-9]+$';
    this.cursos$ = this.cursosService.obtenerCursos();
    this.formularioProfesor = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(soloNumerosRegex)]),
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      cursos : new FormControl({}, [Validators.required]),
    });
  }

  agregarProfesor(){
    let profesor: Profesor = {
      id: this.formularioProfesor.value.id,
      nombre: this.formularioProfesor.value.nombre,
      correo: this.formularioProfesor.value.correo,
      cursos: this.formularioProfesor.value.cursos,
    };

    this.profesorService.agregarProfesor(profesor).subscribe((profesor:Profesor)=>{
      alert(`${profesor.nombre} agregado satisfactoriamente`);
      this.router.navigate(['profesores/listar']);
    });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/alumnos/interfaces/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { CursosService } from 'src/app/cursos/services/cursos.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit{
  cursos$!: Observable<Curso[]>;

  formAgregarAlumno: FormGroup;
  @Output()onNuevoAlumno: EventEmitter<Alumno> = new EventEmitter<Alumno>;

  constructor(
    private alumnosService:AlumnosService,
    private cursosService: CursosService,
  ){
    let soloNumerosRegex:string = '^[1-9]+$';
    let controles: any = {
      id: new FormControl('', [Validators.required, Validators.pattern(soloNumerosRegex)]),
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required, Validators.min(15)]),
      curso: new FormControl('',[Validators.required]),
      activo: new FormControl(false, []),
    };
    this.formAgregarAlumno = new FormGroup(controles);
  }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
  }

  opcionSeleccionada(event: any) {
    this.opcionSeleccionada = event.target.value;
  }

  agregarAlumno(){
    if(this.formAgregarAlumno.status === "VALID"){
      this.alumnosService.agregarAlumno(this.formAgregarAlumno.value).subscribe((alumno:Alumno)=>{
        this.onNuevoAlumno.emit(alumno);
        alert(`${alumno.nombre} agregado satisfactoriamente`);
        this.formAgregarAlumno.reset();
      });
    }
  }
}

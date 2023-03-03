import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/alumnos/interfaces/alumno';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent {
  formAgregarAlumno: FormGroup;
  @Output()onNuevoAlumno: EventEmitter<Alumno> = new EventEmitter<Alumno>;

  constructor(){
    let soloLetrasRegex:string = '^[a-zA-Z ]*$';
    let controles: any = {
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required, Validators.min(15)]),
      curso: new FormControl('',[Validators.required, Validators.pattern(soloLetrasRegex)]),
      activo: new FormControl(false, []),
    };
    this.formAgregarAlumno = new FormGroup(controles);
  }

  agregarAlumno(){
    console.log(this.formAgregarAlumno);
    console.log(this.formAgregarAlumno.value);
    if(this.formAgregarAlumno.status === "VALID"){
      this.onNuevoAlumno.emit(this.formAgregarAlumno.value);
      this.formAgregarAlumno.reset();
    }
  }
}

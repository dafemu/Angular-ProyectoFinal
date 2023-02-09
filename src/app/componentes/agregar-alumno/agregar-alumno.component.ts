import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent {
  formAgregarEstudiante: FormGroup;
  @Output()onNuevoEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>;

  constructor(){
    let soloLetrasRegex:string = '^[a-zA-Z ]*$';
    let controles: any = {
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      edad: new FormControl('',[Validators.required, Validators.min(15)]),
      curso: new FormControl('',[Validators.required, Validators.pattern(soloLetrasRegex)]),
      activo: new FormControl(false, []),
    };
    this.formAgregarEstudiante = new FormGroup(controles);
  }

  agregarEstudiante(){
    console.log(this.formAgregarEstudiante);
    console.log(this.formAgregarEstudiante.value);
    if(this.formAgregarEstudiante.status === "VALID"){
      console.log('entro al if');
      this.onNuevoEstudiante.emit(this.formAgregarEstudiante.value);
      alert("Alumno agregado correctamente");
      this.formAgregarEstudiante.reset();
    }
  }
}

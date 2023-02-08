import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent {
  formAgregarEstudiante: FormGroup;

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

  agregarEstudianteNota(){
    console.log(this.formAgregarEstudiante);
  }
}

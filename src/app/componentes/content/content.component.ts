import { Component } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  alumnos: Array<any> = [
    { "nombre": 'David', "apellido": 'uno', 'edad': 19, "curso": 'Angular', "activo": true },
    { "nombre": "Danny", "apellido": 'dos', "edad": 20, "curso": 'React', "activo": true },
    { "nombre": "Camila", "apellido": 'tres', "edad": 18, "curso": 'Vue', "activo": true },
    { "nombre": "Jiss", "apellido": 'cuatro', "edad": 18, "curso": 'Nodejs', "activo": true }
  ];
  constructor(){
    console.log(this.alumnos);
  }

  agregarNuevoEstudiante(alumno:any){
    this.alumnos.push(alumno);
  }
}

import { Component } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  estudiantes: Array<any> = [
    { "nombre": 'David', 'edad': 19, "curso": 'Angular', "activo": true },
    { "nombre": "Danny", "edad": 20, "curso": 'React', "activo": true },
    { "nombre": "Camila", "edad": 18, "curso": 'Vue', "activo": true },
    { "nombre": "Jiss", "edad": 18, "curso": 'Nodejs', "activo": true }
  ];
  constructor(){
    console.log(this.estudiantes);
  }

  agregarNuevoEstudiante(event:any){
    console.log("EVENTO: ", event);
    this.estudiantes.push(event);
  }
}

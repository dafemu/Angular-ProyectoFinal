import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  alumnos!: Alumno[];
  alumnos$! : Observable<Alumno[]>;

  constructor(private alumnosService:AlumnosService){ }

  ngOnInit(): void {
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
    this.alumnos$.subscribe((alumnos:Alumno[])=>{
      this.alumnos = alumnos;
    });
  }

  agregarNuevoAlumno(alumno:Alumno){
    this.alumnosService.agregarAlumno(alumno);
  }
}

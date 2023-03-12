import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Alumno } from 'src/app/alumnos/interfaces/alumno';
import { AlumnosService } from '../../../alumnos/services/alumnos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  alumnos!: Alumno[];
  alumnos$! : Observable<Alumno[]>;
  subscripcion!: Subscription;

  constructor(private alumnosService:AlumnosService){ }

  // ngOnInit(): void {
  //   this.alumnos$ = this.alumnosService.obtenerAlumnos();
  //   this.subscripcion = this.alumnos$.subscribe((alumnos:Alumno[])=>{
  //     this.alumnos = alumnos;
  //   });
  // }

  // agregarNuevoAlumno(alumno:Alumno){
  //   this.alumnosService.agregarAlumno(alumno);
  // }

  // ngOnDestroy(): void {
  //   this.subscripcion.unsubscribe();
  // }
}

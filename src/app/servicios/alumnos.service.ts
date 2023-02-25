import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos : Alumno[] = [
    { "nombre": 'David', "apellido": 'uno', 'edad': 19, "curso": 'Angular', "activo": true },
    { "nombre": "Danny", "apellido": 'dos', "edad": 20, "curso": 'React', "activo": true },
    { "nombre": "Camila", "apellido": 'tres', "edad": 18, "curso": 'Vue', "activo": true },
    { "nombre": "Jiss", "apellido": 'cuatro', "edad": 18, "curso": 'Nodejs', "activo": true }
  ];

  private alumnos$: BehaviorSubject<Alumno[]>;

  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    // return new Observable<Alumno[]>((subscriptor) => {
    //   subscriptor.next(this.alumnos);
    // });
    return this.alumnos$.asObservable();
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    this.alumnos$.next(this.alumnos);
  }
}

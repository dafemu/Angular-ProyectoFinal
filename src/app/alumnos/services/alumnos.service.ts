import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos : Alumno[] = [
    { "id": '12345', "nombre": 'David', "apellido": 'uno', 'edad': 19, "curso": 'Angular', "activo": true },
    { "id": '23456', "nombre": "Danny", "apellido": 'dos', "edad": 20, "curso": 'React', "activo": true },
    { "id": '34567', "nombre": "Camila", "apellido": 'tres', "edad": 18, "curso": 'Vue', "activo": true },
    { "id": '45678', "nombre": "Jiss", "apellido": 'cuatro', "edad": 18, "curso": 'Nodejs', "activo": true }
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

  editarAlumno(alumno: Alumno){
    let index = this.alumnos.findIndex((alum:Alumno) => alum.id === alumno.id);

    if(index > -1){
      this.alumnos[index] = alumno;
      this.alumnos$.next(this.alumnos);
    }
  }

  eliminarAlumno(alumno: Alumno){
    this.alumnos = this.alumnos.filter((alum:Alumno) => alum.id !== alumno.id);
    this.alumnos$.next(this.alumnos);
  }

}

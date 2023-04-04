import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { Observable, BehaviorSubject, throwError, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos : Alumno[] = [];
  private alumnos$: BehaviorSubject<Alumno[]>;

  constructor(private http: HttpClient) {
    this.alumnos$ = new BehaviorSubject(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${env.authURL}/alumnos`)
    .pipe(
      catchError(this.capturarError)
    );
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${env.authURL}/alumnos`, alumno)
    .pipe(
      catchError(this.capturarError)
    );
  }

  editarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${env.authURL}/alumnos/${alumno.id}`, alumno)
    .pipe(
      catchError(this.capturarError)
    );
  }

  eliminarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${env.authURL}/alumnos/${alumno.id}`)
    .pipe(
      catchError(this.capturarError)
    );
  }

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de Alumnos'));
  }


}

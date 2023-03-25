import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { env } from 'src/environment/environment';
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  constructor(private http: HttpClient) { }

  obtenerProfesores(): Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${env.apiURL}/profesores`)
  }

  agregarProfesor(profesor:Profesor): Observable<Profesor>{
    return this.http.post<Profesor>(`${env.apiURL}/profesores`, profesor)
    .pipe(
      catchError(this.capturarError)
    );
  }

  editarProfesor(profesor:Profesor):Observable<Profesor>{
    return this.http.put<Profesor>(`${env.apiURL}/profesores/${profesor.id}`, profesor)
    .pipe(
      catchError(this.capturarError)
    );
  }

  eliminarProfesor(profesor: Profesor): Observable<Profesor>{
    return this.http.delete<Profesor>(`${env.apiURL}/profesores/${profesor.id}`)
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
    return throwError(() => new Error('Error en el procesamiento de profesores'));
  }
}

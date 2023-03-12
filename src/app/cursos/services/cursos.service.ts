import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { env } from 'src/environment/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`)
    .pipe(
      catchError(this.capturarError)
    );
  }

  agregarCurso(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(`${env.apiURL}/cursos`, curso)
    .pipe(
      catchError(this.capturarError)
    );
  }

  editarCurso(curso:Curso):Observable<Curso>{
    return this.http.put<Curso>(`${env.apiURL}/cursos/${curso.id}`, curso)
    .pipe(
      catchError(this.capturarError)
    );
  }

  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${env.apiURL}/cursos/${curso.id}`)
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

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }

}

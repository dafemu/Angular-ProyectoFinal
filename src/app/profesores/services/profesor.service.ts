import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}

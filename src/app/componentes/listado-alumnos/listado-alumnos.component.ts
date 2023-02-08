import { Component, ViewChild } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent {

  estudiantes: Array<Estudiante> = [
    { "nombre": 'David', 'edad': 19, "curso": 'Angular', "activo": true },
    { "nombre": "Danny", "edad": 20, "curso": 'React', "activo": true },
    { "nombre": "Camila", "edad": 18, "curso": 'Vue', "activo": true },
    { "nombre": "Jiss", "edad": 18, "curso": 'Nodejs', "activo": true }
  ];

  dataSource = new MatTableDataSource<Estudiante>(this.estudiantes);
  displayedColumns: string[] = ['nombre', 'edad', 'curso', 'activo'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(){}
}

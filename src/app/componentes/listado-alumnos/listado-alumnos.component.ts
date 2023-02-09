import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements  AfterViewInit, OnInit{

  @Input()alumnos!: Array<Estudiante>;

  dataSource!: MatTableDataSource<Estudiante>;
  displayedColumns: string[] = ['nombre', 'edad', 'curso', 'activo', 'acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>(this.alumnos);
  }
}

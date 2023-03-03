import { Component, ViewChild, AfterViewInit, Input, OnInit, OnDestroy } from '@angular/core';
import { Alumno } from 'src/app/alumnos/interfaces/alumno';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements  AfterViewInit, OnInit, OnDestroy{

  @Input()alumnos!: Alumno[];
  private alumnos$!: BehaviorSubject<Alumno[]>;

  subscripcion!: Subscription;

  dataSource!: MatTableDataSource<Alumno>;
  displayedColumns: string[] = ['nombre', 'edad', 'curso', 'activo', 'acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private alumnosService:AlumnosService){
    this.alumnos$ = new BehaviorSubject(this.alumnos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumno>;
    this.subscripcion = this.alumnosService.obtenerAlumnos()
      .subscribe((alumnos:Alumno[])=>{
        this.dataSource.data = alumnos;
      });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}

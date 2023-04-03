import { Component, ViewChild, AfterViewInit, Input, OnInit, OnDestroy } from '@angular/core';
import { Alumno } from 'src/app/alumnos/interfaces/alumno';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AlumnosService } from '../../services/alumnos.service';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements  AfterViewInit, OnInit, OnDestroy{
  sesion$!: Observable<Sesion>

  subscripcion!: Subscription;

  dataSource!: MatTableDataSource<Alumno>;
  displayedColumns: string[] = ['id','nombre', 'edad', 'curso', 'activo', 'acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private alumnosService:AlumnosService,
    private router: Router,
    private sesion: SesionService,
  ){ }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumno>;
    this.subscripcion = this.alumnosService.obtenerAlumnos()
      .subscribe((alumnos:Alumno[])=>{
        this.dataSource.data = alumnos;
      });
    this.sesion$ = this.sesion.obtenerSesion();
  }

  redirEditarAlumno(alumno:Alumno){
    this.router.navigate(['alumnos/editar', alumno]);
  }

  recibirNuevoAlumno(alumno:Alumno){
    this.dataSource.data = [...this.dataSource.data, alumno];
  }

  eliminarAlumno(alumnoDelete:Alumno){
    this.alumnosService.eliminarAlumno(alumnoDelete)
      .subscribe((alumno: Alumno) => {
        alert(`${alumno.nombre} eliminado`);
        this.alumnosService.obtenerAlumnos()
          .subscribe((alumnos:Alumno[])=>{
            this.dataSource.data = alumnos;
          });
      });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}

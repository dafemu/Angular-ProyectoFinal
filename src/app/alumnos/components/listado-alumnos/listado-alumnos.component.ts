import { Component, ViewChild, AfterViewInit, Input, OnInit, OnDestroy } from '@angular/core';
import { Alumno } from 'src/app/alumnos/interfaces/alumno';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';
import { AlumnosService } from '../../services/alumnos.service';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Store } from '@ngrx/store';
import { AlumnosState } from '../../state/alumnos-state.reducer';
import { cargarAlumnosStates } from '../../state/alumnos-state.actions';
import { selectorAlumnosCargados, selectorCargandoAlumnos } from '../../state/alumnos-state.selectors';
import { eliminarAlumnoState } from '../../state/alumnos-state.actions';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements  AfterViewInit, OnInit, OnDestroy{
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>;

  subscripcion!: Subscription;

  dataSource!: MatTableDataSource<Alumno>;
  displayedColumns: string[] = ['id','nombre', 'edad', 'curso', 'activo', 'acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private alumnosService:AlumnosService,
    private router: Router,
    private sesion: SesionService,
    private store: Store<AlumnosState>,
  ){ }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.cargando$ = this.store.select(selectorCargandoAlumnos);
    this.store.dispatch(cargarAlumnosStates());
    this.dataSource = new MatTableDataSource<Alumno>;
    this.subscripcion = new Subscription();

    this.subscripcion.add(
      this.store.select(selectorAlumnosCargados)
        .subscribe((alumnos:Alumno[]) => {
          this.dataSource.data = alumnos;
        })
    );
    this.sesion$ = this.sesion.obtenerSesion();
  }

  redirEditarAlumno(alumno:Alumno){
    this.router.navigate(['alumnos/editar', alumno]);
  }

  eliminarAlumno(alumnoDelete: Alumno) {
    this.store.dispatch(eliminarAlumnoState({ alumno: alumnoDelete }));
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }
}

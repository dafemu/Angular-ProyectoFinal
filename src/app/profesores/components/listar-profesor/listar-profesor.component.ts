import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Profesor } from '../../models/profesor';
import { ProfesorService } from '../../services/profesor.service';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/core/models/sesion';
import { MatDialog } from '@angular/material/dialog';
import { EditarProfesorComponent } from '../editar-profesor/editar-profesor.component';
import { Curso } from 'src/app/cursos/models/curso';
import { CursosService } from 'src/app/cursos/services/cursos.service';

@Component({
  selector: 'app-listar-profesor',
  templateUrl: './listar-profesor.component.html',
  styleUrls: ['./listar-profesor.component.css']
})
export class ListarProfesorComponent implements OnInit, OnDestroy{

  displayedColumns: string[] = ['id', 'nombre', 'correo', 'acciones'];
  dataSource!: MatTableDataSource<Profesor>;;
  profesores$!: Observable<Profesor[]>;
  sesion$!: Observable<Sesion>
  suscripcion!: Subscription;
  cursos$!: Observable<Curso[]>;
  cursosProfesor!: Curso[];

  constructor(
    private profesorService: ProfesorService,
    private SesionService: SesionService,
    private dialog: MatDialog,
    private cursoService: CursosService,
    ){}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Profesor>();
    this.suscripcion = this.profesorService.obtenerProfesores().subscribe((profesores:Profesor[])=>{
      this.dataSource.data = profesores;
    });
    this.sesion$ = this.SesionService.obtenerSesion();
  }

  editarProfesorDialog(profesor: Profesor){
    this.dialog.open(EditarProfesorComponent, {
      data: profesor
    }).afterClosed().subscribe((profesor: Profesor)=>{
      alert(`${profesor.nombre} editado satisfactoriamente`);
    });
  }

  eliminarProfesor(profesor: Profesor){
    this.profesorService.eliminarProfesor(profesor).subscribe((profesor: Profesor) =>{
      alert(`${profesor.nombre} eliminado`);
      const profesores = this.dataSource.data.filter(p => p.id !== profesor.id);
      this.dataSource.data = profesores;
    });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
}

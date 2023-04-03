import { Component } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Router } from '@angular/router';
import { CursoState } from '../state/cursos-state.reducer';
import { Store } from '@ngrx/store';
import { selectorCargandoCursos, selectorCursosCargados } from '../state/cursos-state.selectors';
import { cargarCursosStates, eliminarCursoState } from '../state/cursos-state.actions';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent {

  cursos!: Curso[];
  cursos$!:Observable<Curso[]>;
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private sesion: SesionService,
    private router: Router,
    private store: Store<CursoState>,
  ){}

  ngOnInit(): void {
    this.cargando$ = this.store.select(selectorCargandoCursos);
    this.store.dispatch(cargarCursosStates());

    this.cursos$ = this.store.select(selectorCursosCargados);
    // this.cursos$ = this.cursosService.obtenerCursos();
    this.sesion$ = this.sesion.obtenerSesion();
  }

  abrirDialog(curso: Curso){
    this.dialog.open(EditarCursoComponent, {
      data: curso
    }).afterClosed().subscribe((curso: Curso) => {
      alert(`${curso.nombre} editado satisfactoriamente`);
      // this.cursos$ = this.cursosService.obtenerCursos();
      // this.cursos$ = this.store.select(selectorCursosCargados);
    });
  }

  eliminarCurso(curso: Curso){
    this.store.dispatch(eliminarCursoState({curso}));
    // this.cursosService.eliminarCurso(curso).subscribe((curso: Curso) => {
    //   alert(`${curso.nombre} eliminado`);
    //   // this.cursos$ = this.cursosService.obtenerCursos();
    //   this.cursos$ = this.store.select(selectorCursosCargados);
    // });
  }

  redirigirAgregarCurso(){
    this.router.navigate(['/cursos/agregar']);
  }
}

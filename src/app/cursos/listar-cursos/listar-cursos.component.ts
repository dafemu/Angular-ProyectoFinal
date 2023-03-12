import { Component } from '@angular/core';
import { Curso } from '../models/curso';
import { CursosService } from '../services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent {

  cursos!: Curso[];
  cursos$!:Observable<Curso[]>;
  sesion$!: Observable<Sesion>

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private sesion: SesionService,
  ){}

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.sesion$ = this.sesion.obtenerSesion();
  }

  abrirDialog(curso: Curso){
    this.dialog.open(EditarCursoComponent, {
      data: curso
    }).afterClosed().subscribe((curso: Curso) => {
      alert(`${curso.nombre} editado satisfactoriamente`);
      this.cursos$ = this.cursosService.obtenerCursos();
    });
  }

  eliminarCurso(curso: Curso){
    this.cursosService.eliminarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} eliminado`);
      this.cursos$ = this.cursosService.obtenerCursos();
    });
  }
}

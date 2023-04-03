import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { SharedModule } from "../shared/shared.module";
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosStateEffects } from './state/alumnos-state.effects';


@NgModule({
    declarations: [
        ListadoAlumnosComponent,
        AgregarAlumnoComponent,
        EditarAlumnoComponent,
    ],
    exports: [
      ListadoAlumnosComponent,
      AgregarAlumnoComponent,
      AlumnosRoutingModule
    ],
    providers: [],
    imports: [
      CommonModule,
      SharedModule,
      AlumnosRoutingModule,
      EffectsModule.forFeature([AlumnosStateEffects]),
    ]
})
export class AlumnosModule { }

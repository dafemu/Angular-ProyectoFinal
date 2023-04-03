import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CursosStateEffects } from './state/cursos-state.effects';
import { StoreModule } from '@ngrx/store';
import { cursosStateFeatureKey, reducer } from './state/cursos-state.reducer';



@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    StoreModule.forFeature(cursosStateFeatureKey, reducer),
    EffectsModule.forFeature([CursosStateEffects])
  ],
  exports: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListarCursosComponent,
    CursosRoutingModule,
  ]
})
export class CursosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarProfesorComponent } from './components/agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './components/editar-profesor/editar-profesor.component';
import { ListarProfesorComponent } from './components/listar-profesor/listar-profesor.component';
import { ProfesoresRoutingModule } from './profesores-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EffectsModule } from '@ngrx/effects';
import { ProfesoresStateEffects } from './state/profesores-state.effects';



@NgModule({
  declarations: [
    AgregarProfesorComponent,
    EditarProfesorComponent,
    ListarProfesorComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    SharedModule,
    EffectsModule.forFeature([ProfesoresStateEffects])
  ]
})
export class ProfesoresModule { }

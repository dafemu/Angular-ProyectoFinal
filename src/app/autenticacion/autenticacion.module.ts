import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthStateEffects } from './state/auth-state.effects';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AutenticacionRoutingModule,
    EffectsModule.forFeature([AuthStateEffects])
  ],
  // exports: [
  //   LoginComponent,
  // ]
})
export class AutenticacionModule { }

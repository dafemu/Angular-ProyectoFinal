import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AutenticacionRoutingModule
  ],
  // exports: [
  //   LoginComponent,
  // ]
})
export class AutenticacionModule { }

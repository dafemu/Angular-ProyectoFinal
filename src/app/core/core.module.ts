import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NoEncontradoComponent,
    InicioComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NoEncontradoComponent,
    InicioComponent,
    ContentComponent,
    CoreRoutingModule
  ]
})
export class CoreModule { }

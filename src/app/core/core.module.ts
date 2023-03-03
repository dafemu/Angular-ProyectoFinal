import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    AlumnosModule,
    SharedModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ]
})
export class CoreModule { }

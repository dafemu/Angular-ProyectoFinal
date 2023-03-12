import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  sesion$!: Observable<Sesion>;

  constructor(private router: Router, private sesion: SesionService){}

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

  redirigirLogin(){
    this.router.navigate(['auth']);
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}

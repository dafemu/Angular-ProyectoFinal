import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private sesion: SesionService) { }

  login(usuario: Usuario){
    let sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
    };

    this.sesion.crearSesion(sesion);
  }
}

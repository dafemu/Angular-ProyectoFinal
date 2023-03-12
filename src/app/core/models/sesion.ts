import { Usuario } from "src/app/autenticacion/models/usuario";

export interface Sesion {
  sesionActiva: boolean;
  usuarioActivo?: Usuario;
}

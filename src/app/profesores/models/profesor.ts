import { Curso } from "src/app/cursos/models/curso";

export interface Profesor {
  id: string;
  nombre: string;
  correo: string;
  cursos: Curso[];
}

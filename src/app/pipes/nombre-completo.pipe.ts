import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(nombre: string, apellido: string): unknown {
    return `${nombre} ${apellido}`;
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSizeLetras]'
})
export class SizeLetrasDirective {

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.fontSize = '20px';
    elemento.nativeElement.style.color = '#154c79';
  }

}

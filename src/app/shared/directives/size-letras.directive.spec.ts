import { ElementRef } from '@angular/core';
import { SizeLetrasDirective } from './size-letras.directive';

describe('SizeLetrasDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {
      nativeElement: document.createElement('p')
    };

    const directive = new SizeLetrasDirective(elementRefMock as ElementRef);
    expect(directive).toBeTruthy();
  });
});

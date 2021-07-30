import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // selector: 'p[fundoAmarelo]'
  // selector: 'button[fundoAmarelo]'
  // selector: 'h2[fundoAmarelo]'


})
export class FundoAmareloDirective {

  constructor(
    private _elementRef:ElementRef,
    private _renderer2:Renderer2) {

    console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor='Yellow';
    
    //Boas praticas para não ter ataques
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');

  }

}

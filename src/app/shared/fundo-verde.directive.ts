import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoVerde]'
})
export class FundoVerdeDirective {

  constructor(private _elementRef:ElementRef,
    private _render2:Renderer2) { 
    
      this._render2.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'green')

  }

}

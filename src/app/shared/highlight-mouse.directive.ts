import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  //mouseOver : boolean = false;

  @HostListener('mouseenter') onMouseOver() {
    // this._render2.setStyle(
    //   this._elementRef.nativeElement,
    //   'backgroundColor', 'blue')
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._render2.setStyle(
    //   this._elementRef.nativeElement,
    //   'backgroundColor', 'white')
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor : string = '';

  constructor(private _elementRef: ElementRef,
    private _render2: Renderer2) {
  }

}

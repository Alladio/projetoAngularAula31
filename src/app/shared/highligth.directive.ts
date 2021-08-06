import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor : string = '';


  // Até aqui não daria para fazer customização
  
  //Apos os @INPUT a customização pode ser feita tranquilamente
  //Deixando o sistema mais customizável
  @Input() defaultColor:string='';
  @Input('highlight') highlightColor:string='';

  constructor() {  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}

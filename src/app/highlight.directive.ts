import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private e1:ElementRef) { }
  private highlightmethod(color:string)
  {
    this.e1.nativeElement.style.backgroundColor=color;
  }
 @HostListener('mouseenter') onMouseEnter()
 {
   this.highlightmethod('yellow');
 }
 @HostListener('mouseleave') onMouseLeave()
 {
   this.highlightmethod('');
 }
}

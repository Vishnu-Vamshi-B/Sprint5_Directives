import { Directive,ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective implements AfterViewInit {
@Input() textColor:string = '';
@Input() textSize:string = '';
  constructor(private elRef:ElementRef) { }

  ngAfterViewInit(): void {
  this.textColor = this.textColor || "orange";
  this.textSize = this.textSize || '30px';
  this.elRef.nativeElement.style.color = this.textColor;
  this.elRef.nativeElement.style.fontSize = this.textSize;    
  }
}
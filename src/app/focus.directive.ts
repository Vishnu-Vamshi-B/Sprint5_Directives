// Focus Directive
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFocus1]'
})

export class Focus1Directive {
  constructor() { }

@Input('appFocus1') color:string="";
@HostBinding('style.backgroundColor')
bgcolor:string='';
@HostListener('focus') onFocus(){
  this.bgcolor='pink';
}
@HostListener('blur') onBlur(){
  this.bgcolor='red';
}
}

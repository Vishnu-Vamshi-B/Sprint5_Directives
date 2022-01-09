// Check Directive
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheck1]'
})

export class Check1Directive {
  constructor(private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef) { }

    @Input() set appCheck1(data:boolean)
    {
      this.viewContainer.clear();
      if(data)
    {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
}





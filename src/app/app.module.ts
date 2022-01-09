import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { Check1Directive } from './check1.directive';
import { Focus1Directive } from './focus.directive';
import { ZoomComponent } from './zoom/zoom.component';
import { ZoomDirective } from './zoom.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    Check1Directive,
    Focus1Directive,
    ZoomComponent,
    ZoomDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

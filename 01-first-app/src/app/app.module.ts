import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  /* Register the UI entities (component, pipe & directive) of the module */
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  /* Register the "services" */
  providers: [],
  bootstrap: [
    AppComponent,
    GreeterComponent
  ]
})
export class AppModule { }

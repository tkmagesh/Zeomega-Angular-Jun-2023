import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  /* Register the UI entities (component, pipe & directive) of the module */
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  /* Register the "services" */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  /* Register the UI entities (component, pipe & directive) of the module */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  /* Register the "services" */
  providers: [],
  bootstrap: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent
  ]
})
export class AppModule { }

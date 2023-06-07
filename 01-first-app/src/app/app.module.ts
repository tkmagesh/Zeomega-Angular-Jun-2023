import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  /* Register the UI entities (component, pipe & directive) of the module */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    Calculator2Component,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  /* Register the "services" */
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

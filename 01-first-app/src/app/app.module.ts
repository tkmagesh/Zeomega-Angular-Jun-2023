import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salary-calculator-model';
import { SalaryCalculatorModel2 } from './salary-calculator/salary-calculator-model-2';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';

@NgModule({
  /* Register the UI entities (component, pipe & directive) of the module */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    Calculator2Component,
    ProductsComponent,
    SalaryCalculatorComponent,
    CalculatorResultComponent
  ],
  imports: [
    BrowserModule
  ],
  /* Register the "services" */
  providers: [
    { provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel2}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

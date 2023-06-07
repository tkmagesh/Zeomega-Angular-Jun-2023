import { Component } from '@angular/core';
import { SalaryCalculatorModel } from './salary-calculator-model';
import { SalaryCalculatorModel2 } from './salary-calculator-model-2';



@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css'],
  providers : [
    /* { provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel} */
    /* SalaryCalculatorModel */
    /* { provide: SalaryCalculatorModel, useClass: SalaryCalculatorModel2 } */
  ]
})
export class SalaryCalculatorComponent {
  // model : SalaryCalculatorModel = new SalaryCalculatorModel()  
  constructor(public model : SalaryCalculatorModel){

  }
}

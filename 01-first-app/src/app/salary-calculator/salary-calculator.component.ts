import { Component } from '@angular/core';
import { SalaryCalculatorModel } from './salary-calculator-model';



@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent {
  model : SalaryCalculatorModel = new SalaryCalculatorModel()  
}

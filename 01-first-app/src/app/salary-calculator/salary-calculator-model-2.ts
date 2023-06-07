import { SalaryCalculatorModel } from "./salary-calculator-model";

export class SalaryCalculatorModel2 extends SalaryCalculatorModel{
    override calculate(): void {
        super.calculate()
        this.salary += 500;
    }
}
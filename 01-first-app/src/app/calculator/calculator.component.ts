import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  
  
  public result: number = 0;

  // n1
  private _n1: number = 0;
  get n1() : string {
    return this._n1.toString()
  }

  set n1(val : string){
    this._n1 = parseInt(val)
  }

  // n2
  private _n2: number = 0;
  get n2(): string {
    return this._n2.toString()
  }

  set n2(val: string) {
    this._n2 = parseInt(val)
  }

  onBtnAddClick(){
    this.result = this._n1 + this._n2
  }
  onBtnSubtractClick() {
    this.result = this._n1 - this._n2
  }
  onBtnMultiplyClick() {
    this.result = this._n1 * this._n2
  }
  onBtnDivideClick() {
    this.result = this._n1 / this._n2
  }
}

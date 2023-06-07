import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component {
  public result: number = 0;

  // n1
  private _n1: number = 0;
  get n1(): string {
    return this._n1.toString()
  }

  set n1(val: string) {
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

  //operation
  private _operation : string = ''
  get operation() : string {
    return this._operation;
  }
  set operation(val : string) {
    this._operation = val;
  }

  onBtnCalculateClick(){
    switch (this.operation) {
      case "add":
        this.result = this._n1 + this._n2
        break;
      case "subtract":
        this.result = this._n1 - this._n2
        break;
      case "multiply":
        this.result = this._n1 * this._n2
        break;
      case "divide":
        this.result = this._n1 / this._n2
        break;
      default:
        break;
    }
  }
}

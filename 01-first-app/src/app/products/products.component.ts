import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : string[] = [];
  newProductName : string = '';

  onBtnAddNewClick(newProductName: string) {
    this.products.push(newProductName)
  }

  /* 
  onBtnRemoveClick(productToRemove : string){
    this.products.splice(this.products.indexOf(productToRemove), 1)
  } 
  */
  onBtnRemoveClick(idx: number) {
    this.products.splice(idx, 1)
  }
}

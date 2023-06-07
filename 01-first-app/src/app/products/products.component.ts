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
}

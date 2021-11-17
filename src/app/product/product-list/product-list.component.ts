import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id = 0;

  products: Product[] = [];
  isCreated = false;
  isUpdated = false;

  index = -1;
  constructor() {
  }

  ngOnInit() {
  }

  showCreate() {
    this.isCreated = !this.isCreated;
  }

  addProduct(product: Product) {
    if (product.id === undefined) {
      product.id = this.id++;
    }
    this.products.push(product);
  }

  changeButtonUpdate(product: Product) {
    this.isUpdated = !this.isUpdated;
    this.index = this.products.indexOf(product);
  }

  delete(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }

  updateProduct(product: Product) {
    this.products.forEach((p) => {
      if (p.id === product.id) {
        this.products[this.products.indexOf(p)] = product;
      }
    })
  }
}

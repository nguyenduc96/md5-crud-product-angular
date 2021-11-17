import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  @Input()
  title: 'Update Product';

  @Input()
  product: Product = {};

  @Output()
  eventEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  submitUpdate(productUpdateForm: NgForm) {
    this.eventEmitter.emit(productUpdateForm.value);
  }
}

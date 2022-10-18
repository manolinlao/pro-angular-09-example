import { Component, OnInit } from '@angular/core';
import { Model } from '../../model/repository.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  model: Model = new Model();

  constructor() {}

  ngOnInit(): void {}

  getClasses(id: number): string {
    let product = this.model.getProduct(id);
    return 'p-2 ' + ((product?.price ?? 0) < 50 ? 'bg-info' : 'bg-warning');
  }
}

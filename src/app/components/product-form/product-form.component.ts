import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
    newProduct: Product = new Product();

    @Output('paNewProduct') newProductEvent = new EventEmitter<Product>();

    constructor() {}

    ngOnInit(): void {}

    submitForm(form: any) {
        this.newProductEvent.emit(this.newProduct);
        this.newProduct = new Product();
        form.resetForm();
    }
}

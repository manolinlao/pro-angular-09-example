import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
    newProduct: Product = new Product();

    constructor(private model: Model) {}

    ngOnInit(): void {}

    submitForm(form: any) {
        this.model.saveProduct(this.newProduct);
        this.newProduct = new Product();
        form.resetForm();
    }
}

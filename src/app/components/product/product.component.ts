import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/model/product.model';
import {Model} from '../../model/repository.model';
import {NgForm, NgModel, ValidationErrors} from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent {
    model: Model = new Model();

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    newProduct: Product = new Product();

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }

    submitForm() {
        this.addProduct(this.newProduct);
    }    
}

import {Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Product} from 'src/app/model/product.model';
import {Model} from '../../model/repository.model';

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
    @Input('model') dataModel: Model | undefined;
    @ViewChild('miTD') miTD: any;
    @ViewChild('miTD2') miTD2: any;

    showModel: boolean = true;

    constructor() {}

    ngOnInit(): void {
        //esto dará un undefined
        console.log('product-table oninit', this.miTD);
    }

    ngAfterViewInit() {
        console.log('product-table afterviewinit', this.miTD);
        console.log('product-table afterviewinit', this.miTD2);
    }

    getProduct(key: number): Product | undefined {
        return this.dataModel?.getProduct(key);
    }

    getProducts(): Product[] | undefined {
        return this.dataModel?.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel?.deleteProduct(key);
    }
}

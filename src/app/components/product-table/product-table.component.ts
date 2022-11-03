import {Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from 'src/app/model/product.model';
import {Model} from '../../model/repository.model';

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
    @ViewChild('miTD') miTD: any;
    @ViewChild('miTD2') miTD2: any;

    // para probar el async pipe
    numeros: Subject<number> = new Subject<number>();

    showModel: boolean = true;
    taxRate: number = 0;
    categoryFilter: string = '';

    constructor(private dataModel: Model) {}

    ngOnInit(): void {
        //esto dará un undefined
        console.log('product-table oninit', this.miTD);

        let counter = 100;
        /*
        setInterval(() => {
            this.numeros.next((counter += 10)), 10000;
        });
        */
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

    deleteProduct(key: number | undefined) {
        if (key) {
            this.dataModel?.deleteProduct(key);
        }
    }
}

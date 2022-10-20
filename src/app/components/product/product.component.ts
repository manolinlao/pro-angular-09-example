import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/model/product.model';
import {Model} from '../../model/repository.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    model: Model = new Model();

    constructor() {}

    ngOnInit(): void {}

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.model.getProducts().length;
    }

    targetName: string = 'kayak';

    ///////////////////////////////// demo de clases

    getClasses(id: number): string {
        let product = this.model.getProduct(id);
        return 'p-2 ' + ((product?.price ?? 0) < 50 ? 'bg-info' : 'bg-warning');
    }

    /* para trabajar con ngClass */
    /* retorna un objeto Map -> clave-valor
     del estilo:
     {
      'text-center bg-danger':true,
      'bg-info':false
     }

  */
    getClassMap(id: number): Object {
        let product = this.model.getProduct(id);
        return {
            'text-center bg-danger': product?.name == 'kayak',
            'bg-info': (product?.price ?? 0) < 50,
        };
    }

    /*
    para trabajar con ngStyle
      [ngStyle]='getStyles(2)'
   */
    getStyles(id: number): Object {
        let product = this.model.getProduct(id);
        return {
            fontSize: '30px',
            'margin.px': 100,
            color: (product?.price ?? 0) > 50 ? 'red' : 'green',
        };
    }
}

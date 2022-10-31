import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../model/product.model';

@Pipe({
    name: 'myFilter',
    pure: false,
})
export class CategoryFilterPipe implements PipeTransform {
    transform(products: Product[] | undefined, category: string | undefined): Product[] {
        if (products == undefined) {
            return [];
        }
        return category == undefined || category == '' ? products : products.filter((p) => p.category == category);
    }
}

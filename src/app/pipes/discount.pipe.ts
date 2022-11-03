import {Pipe, PipeTransform} from '@angular/core';
import {DiscountService} from '../services/discount.service';

@Pipe({
    name: 'discount',
    pure: false,
})
export class DiscountPipe implements PipeTransform {
    constructor(private discountService: DiscountService) {}

    transform(price: number | undefined): number {
        return this.discountService.applyDiscount(price!);
    }
}

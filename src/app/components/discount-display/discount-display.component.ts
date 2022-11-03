import {Component, OnInit} from '@angular/core';
import {DiscountService} from '../../services/discount.service';

@Component({
    selector: 'app-discount-display',
    templateUrl: './discount-display.component.html',
    styleUrls: ['./discount-display.component.css'],
})
export class DiscountDisplayComponent implements OnInit {
    constructor(public discountService: DiscountService) {}

    ngOnInit(): void {}
}

import {Component, OnInit} from '@angular/core';
import {DiscountService} from '../../services/discount.service';

@Component({
    selector: 'app-discount-editor',
    templateUrl: './discount-editor.component.html',
    styleUrls: ['./discount-editor.component.css'],
})
export class DiscountEditorComponent implements OnInit {
    descuento: number = 0;

    constructor(public discountService: DiscountService) {}

    ngOnInit(): void {}
}

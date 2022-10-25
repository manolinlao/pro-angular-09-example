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
    showTable: boolean = false;
}

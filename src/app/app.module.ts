import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {PaAttrDirective} from './directives/pa-attr.directive';
import {ProductTableComponent} from './components/product-table/product-table.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';
import { AddTaxPipe } from './pipes/add-tax.pipe';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';

@NgModule({
    declarations: [AppComponent, ProductComponent, PaAttrDirective, ProductTableComponent, ProductFormComponent, ToggleViewComponent, AddTaxPipe, MayusculasPipe, CategoryFilterPipe],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

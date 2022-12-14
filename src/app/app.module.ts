import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {ProductOld01Component} from './components/product-old01/product-old01.component';
import {ProductOldChapter12Component} from './components/product-old-chapter12/product-old-chapter12.component';
import { PaAttrDirective } from './directives/pa-attr.directive';

@NgModule({
    declarations: [AppComponent, ProductComponent, ProductOld01Component, ProductOldChapter12Component, PaAttrDirective],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

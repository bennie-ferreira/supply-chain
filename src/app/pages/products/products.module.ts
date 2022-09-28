import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { productReduce } from 'src/app/store/product.state';


@NgModule({
  declarations: [
    NewProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ product: productReduce })
  ]
})
export class ProductsModule { }

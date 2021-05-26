import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
    declarations: [ProductCardComponent],
    exports: [
        ProductCardComponent
    ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ]
})
export class ProductCardModule { }

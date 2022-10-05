import { OrderModule } from 'ngx-order-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { listProductsProvidersReduce } from 'src/app/store/home.state';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LivesRoutingModule,
    StoreModule.forRoot({ homeInitialState: listProductsProvidersReduce }),
    OrderModule
    
  ]
})
export class LivesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { NewProviderComponent } from './new-provider/new-provider.component';


@NgModule({
  declarations: [
    NewProviderComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }

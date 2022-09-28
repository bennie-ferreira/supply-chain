import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { NewProviderComponent } from './new-provider/new-provider.component';
import { ProviderFormComponent } from 'src/app/components/provider-form/provider-form.component';



@NgModule({
  declarations: [
    NewProviderComponent,
    ProviderFormComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
    
  ]
})
export class ProvidersModule { }

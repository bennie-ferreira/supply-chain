import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { NewProviderComponent } from './new-provider/new-provider.component';
import { ProviderFormComponent } from 'src/app/components/provider-form/provider-form.component';
import { ListProvidersComponent } from 'src/app/components/list-providers/list-providers.component';
import { StoreModule } from '@ngrx/store';
import { providerReduce } from 'src/app/store/provider.state';



@NgModule({
  declarations: [
    NewProviderComponent,
    ProviderFormComponent,
    ListProvidersComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ providerInitialState: providerReduce })
  ]
})
export class ProvidersModule { }

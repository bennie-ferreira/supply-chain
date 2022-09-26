import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProviderComponent } from './new-provider/new-provider.component';

const routes: Routes = [{ path: '', component: NewProviderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }

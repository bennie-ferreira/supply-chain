import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProviderService } from '../../../services/provider.service'
import { map, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IProductsProvidersState, listProductsProvidersAction } from 'src/app/store/home.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private providerService: ProviderService, 
    private store: Store<{ homeInitialState: IProductsProvidersState }>
  ) { 
    this.subscription = new Subscription()
  }

  columns$ = this.store.select('homeInitialState').pipe(
    map(i => i.columns)
  )

  rows$ = this.store.select('homeInitialState').pipe(
    map(i => i.rows)
  )

  ngOnInit(): void {
    this.subscription = this.providerService.getProductsProviders()
    .subscribe({
      next: (items) => {
        const { data } = items
        this.listProductsProviders(data)
      } 
    })
  }

  listProductsProviders(data: any){
    this.store.dispatch(listProductsProvidersAction(data))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProviderService } from '../../../services/provider.service'
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  rows: any[] = []
  columns: string[] = []

  constructor(private providerService: ProviderService, private productService: ProductService) { 
    this.subscription = new Subscription()
  }

  ngOnInit(): void {
    this.subscription = this.providerService.getProductsProviders().subscribe((items) => {
      const { data } = items
      const _columns = Object.keys(data[0])

      this.rows = data
      this.columns = _columns

    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

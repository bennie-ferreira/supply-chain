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

  rows2: any[] = []
  columns2: string[] = []
  subscription2: Subscription

  constructor(private providerService: ProviderService, private productService: ProductService) { 
    this.subscription = new Subscription()
    this.subscription2 = new Subscription()
  }

  ngOnInit(): void {
    this.subscription = this.providerService.getProductsProviders().subscribe((items) => {
      const { data } = items
      data.map((item) => {
        item.total = (item.price * item.quantity)
      })

      this.rows = data
      this.columns = Object.keys(data[0])
    })

    this.subscription2 = this.productService.getProducts().subscribe((items) => {
      const { data } = items

      data.map((item) => {
        item.createdAt = new Date(item.createdAt).toLocaleDateString('pt-br')
        item.updatedAt = new Date(item.updatedAt).toLocaleDateString('pt-br')
        item.total = (item.price * item.quantity)
      })

      this.rows2 = data
      this.columns2 = Object.keys(data[0])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.subscription2.unsubscribe()
  }

}

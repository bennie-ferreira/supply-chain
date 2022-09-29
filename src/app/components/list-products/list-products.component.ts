import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { addProductAction, IProductState, listProductsAction, removeProductAction } from 'src/app/store/product.state';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {
  subscription: Subscription;
  subscription2: Subscription;
  columns: string[] = ['Código', 'Nome', 'Descrição', 'Preço', 'UM', 'Quantidade', 'Ações']
  
  constructor(
    private productService: ProductService,
    private store: Store<{ productInitialState: IProductState }>
  ) { 
    this.subscription = new Subscription()
    this.subscription2 = new Subscription()
  }
  rows$ = this.store.select('productInitialState').pipe(
    map(i => i.listProduct)
  )

  ngOnInit(): void {
    this.subscription2 = this.productService.emitterProductCreated.subscribe((product) => {
      this.store.dispatch(addProductAction(product.data))
    })

    this.subscription = this.productService.getProducts()
    .subscribe({
      next: (items) => {
        const { data } = items
        this.getListProducts(data)
      }
    })
  }

  getListProducts(data: any){
    this.store.dispatch(listProductsAction(data))
  }

  deleteProduct(id: number){
    this.store.dispatch(removeProductAction(id))
    this.productService.deleteProduct(id)
    .subscribe(() => {
      alert('Produto excluido com sucesso!')
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.subscription2.unsubscribe()
  }

}

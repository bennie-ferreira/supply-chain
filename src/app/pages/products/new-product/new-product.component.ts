import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.sass']
})
export class NewProductComponent implements OnInit {
  btnText = "Cadastrar"

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  async createHandler (product: Product){
    await this.productService.createProduct(product).subscribe((data) => {
      this.productService.emitterProductCreated.emit(data)
    });
    alert("Produto adicionado com sucesso!")
  }

}

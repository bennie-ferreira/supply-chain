import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.sass']
})
export class NewProductComponent implements OnInit {
  btnText = "Cadastrar"

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  async createHandler (product: Product){
    await this.productService.createProduct(product).subscribe();
    alert("Momento adicionado com sucesso!")
    this.router.navigate(['/'])
  }

}

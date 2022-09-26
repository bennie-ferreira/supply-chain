import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Product>()
  @Input() btnText!: string
  productForm!: FormGroup
  
  errorMessage: string = 'O preenchimento deste campo é obrigatório.'

  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      um: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    })
  }

  

  get name() {
    return this.productForm.get('name')!;
  }

  get description() {
    return this.productForm.get('description')!;
  }

  get price() {
    return this.productForm.get('price')
  }

  get um() {
    return this.productForm.get('um')
  }

  get quantity() {
    return this.productForm.get('quantity')
  }

  submit(){
    if(this.productForm.invalid) return
    this.onSubmit.emit(this.productForm.value)
  }

}

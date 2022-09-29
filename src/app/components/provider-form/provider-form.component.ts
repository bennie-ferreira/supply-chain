import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProvider } from 'src/app/interfaces/Providers';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.sass']
})
export class ProviderFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<IProvider>()
  @Input() btnText!: string
  providerForm!: FormGroup
  
  errorMessage: string = 'O preenchimento deste campo é obrigatório.'

  constructor() { }

  ngOnInit(): void {
    this.providerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      name_company: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required])    
    })
  }


  get name() {
    return this.providerForm.get('name')
  }

  get nameCompany() {
    return this.providerForm.get('name_company')
  }

  get contact() {
    return this.providerForm.get('contact')
  }

  get cnpj() {
    return this.providerForm.get('cnpj')
  }

  submit(){
    if(this.providerForm.invalid) return
    this.onSubmit.emit(this.providerForm.value)
    this.providerForm.reset()
  }
}

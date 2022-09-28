import { IProviders } from 'src/app/interfaces/Providers';
import { Router } from '@angular/router';
import { ProviderService } from './../../../services/provider.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.sass']
})
export class NewProviderComponent implements OnInit {

  constructor(private providerService: ProviderService, private router: Router) { }

  btnText = "Cadastrar"

  ngOnInit(): void {
  }

  async createHandler(provider: IProviders){
    await this.providerService.createProvider(provider).subscribe()
    alert("Fornecedor criado com sucesso.")
    this.router.navigate(['/'])

  }

}

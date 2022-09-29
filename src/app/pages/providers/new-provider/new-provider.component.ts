import { IProvider } from 'src/app/interfaces/Providers';
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

  async createHandler(provider: IProvider){
    await this.providerService.createProvider(provider).subscribe((data) => {
      this.providerService.emitterProviderCreated.emit(data)
    });
    alert("Fornecedor criado com sucesso.")

  }

}

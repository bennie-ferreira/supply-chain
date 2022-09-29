import { Component, OnInit } from '@angular/core';
import { map, Subject, Subscription, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProviderService } from 'src/app/services/provider.service';
import { IProviderState, listProvidersAction, addProviderAction, removeProviderAction } from 'src/app/store/provider.state';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.sass']
})
export class ListProvidersComponent implements OnInit {
  subscription: Subscription;
  unsub$ = new Subject()
  columns: string[] = ['Código', 'Razão Social', 'Nome Fantasia', 'CNPJ', 'Contato', 'Ações']

  constructor(
    private providerService: ProviderService,
    private store: Store<{ providerInitialState: IProviderState }>
  ) { 
    this.subscription = new Subscription()
  }

  rows$ = this.store.select('providerInitialState').pipe(
    map(i => i.listProvider)
  )

  ngOnInit(): void {
    this.subscription = this.providerService.emitterProviderCreated.subscribe((provider) => {
      this.store.dispatch(addProviderAction(provider.data))
    })

    this.subscription = this.providerService.getProviders()
    .pipe(
      takeUntil(this.unsub$)
      // tap(v => console.log(v))
    )
    .subscribe({
      next: (items) => {
        const { data } = items
        this.getListProviders(data)
      }
    })
  }

  getListProviders(data: any){
    this.store.dispatch(listProvidersAction(data))
  }

  deleteProvider(id: number){
    this.store.dispatch(removeProviderAction(id))
    this.providerService.deleteProvider(id)
    .subscribe(() => {
      alert('Fornecedor excluido com sucesso!')
    })
  }

  ngOnDestroy(): void {
    this.unsub$.next(true);
    this.unsub$.complete();
    this.subscription.unsubscribe()
  }

}

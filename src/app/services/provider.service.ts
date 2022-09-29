import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';
import { IProductsProviders } from '../interfaces/ProductsProviders'
import { IProvider } from '../interfaces/Providers';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  emitterProviderCreated = new EventEmitter<any>()

  private baseApiUrl = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  getProviders(): Observable<Response<IProvider[]>>{
    return this.http.get<Response<IProvider[]>>(`${this.baseApiUrl}providers`)
  }

  getProductsProviders(): Observable<Response<IProductsProviders[]>>{
    return this.http.get<Response<IProductsProviders[]>>(`${this.baseApiUrl}providers/product`)
  }

  createProvider(provider: IProvider): Observable<IProvider>{
    return this.http.post<IProvider>(`${this.baseApiUrl}provider`, provider)
  }

  deleteProvider(id: number): Observable<Object>{
    return this.http.delete<Response<Object>>(`${this.baseApiUrl}provider/${id}`)
  }
}

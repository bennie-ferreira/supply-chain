import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';
import { IProductsProviders } from '../interfaces/ProductsProviders'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private baseApiUrl = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  getProductsProviders(): Observable<Response<IProductsProviders[]>>{
    return this.http.get<Response<IProductsProviders[]>>(`${this.baseApiUrl}providers/product`)
  }
}

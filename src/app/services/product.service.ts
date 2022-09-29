import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/Product';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  emitterProductCreated = new EventEmitter<any>()

  private baseApiUrl = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Response<Product[]>>{
    return this.http.get<Response<Product[]>>(`${this.baseApiUrl}products`)
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseApiUrl}products`, product)
  }

  deleteProduct(id: number): Observable<Object>{
    return this.http.delete<Response<Object>>(`${this.baseApiUrl}product/${id}`)
  }
}

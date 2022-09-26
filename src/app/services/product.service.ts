import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/Product';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseApiUrl = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Response<Product[]>>{
    return this.http.get<Response<Product[]>>(`${this.baseApiUrl}products`)
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseApiUrl}products`, product)
  }
}

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/Product';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  emitterProductCreated = new EventEmitter<any>()

  private baseApiUrl = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Response<IProduct[]>>{
    return this.http.get<Response<IProduct[]>>(`${this.baseApiUrl}products`)
  }

  createProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`${this.baseApiUrl}products`, product)
  }

  deleteProduct(id: number): Observable<Object>{
    return this.http.delete<Response<Object>>(`${this.baseApiUrl}product/${id}`)
  }
}

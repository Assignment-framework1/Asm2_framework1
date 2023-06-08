import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/interface/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:8080/product`);
  }
  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:8080/product/${id}`);
  }
  getById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:8080/product/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:8080/product`, product);
  }
  editProduct(id: any, product:IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:8080/product/${id}`, product)
  }
}

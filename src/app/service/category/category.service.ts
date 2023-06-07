import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory, ISize } from 'src/interface/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/category';
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
  getById(id: any): Observable<ICategory> {
    return this.http.get<ICategory>(this.apiUrl + '/' + id)
  }
  addCategory(data: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.apiUrl, data)
  }
  editCategory(id: any, data: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(this.apiUrl + '/' + id, data)
  }
  delete(id: any): Observable<ICategory> {
    return this.http.delete<ICategory>(this.apiUrl + '/' + id)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISize } from 'src/interface/models';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  private apiUrl = 'http://localhost:8080/size';
  constructor(private http: HttpClient) { }

  getAll(): Observable<ISize> {
    return this.http.get<ISize>(this.apiUrl);
  }
  getById(id: any): Observable<ISize> {
    return this.http.get<ISize>(this.apiUrl + '/' + id);
  }
  addSize(data: ISize): Observable<ISize> {
    return this.http.post<ISize>(this.apiUrl, data);
  }
  editSize(id: any, data: ISize): Observable<ISize> {
    return this.http.put<ISize>(this.apiUrl + '/' + id, data);
  }
  deleteSize(id: any): Observable<ISize> {
    return this.http.delete<ISize>(this.apiUrl + '/' + id);
  }
}

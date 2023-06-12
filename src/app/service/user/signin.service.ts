import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signin } from 'src/interface/models';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  signIn(data: any): Observable<any> {
    return this.http.post<Signin>(this.apiUrl + '/signin', data);
  }
}

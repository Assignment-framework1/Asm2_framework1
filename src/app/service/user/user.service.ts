import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }
  registerUser(user: { username: string, password: string }) {
    return this.http.post(`${this.API_URL}/signup`, user);
  }
}

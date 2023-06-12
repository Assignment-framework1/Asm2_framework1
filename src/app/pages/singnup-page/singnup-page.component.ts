import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-singnup-page',
  templateUrl: './singnup-page.component.html',
  styleUrls: ['./singnup-page.component.css'],
})
export class SingnupPageComponent {
  user = {
    username: '',
    password: '',
    email: '',
    phone: '',
    confirmpassword: '',
    isAdmin: false,
  };
  constructor(private http: HttpClient) {}
  onSubmit() {
    this.http.post('http://localhost:3000/signup', this.user).subscribe(
      (response) => {
        console.log('Registration successful');
      },
      (error) => {
        console.error('Registration failed');
      }
    );
  }
}

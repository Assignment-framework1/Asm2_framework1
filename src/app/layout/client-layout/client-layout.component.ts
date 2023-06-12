import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css'],
})
export class ClientLayoutComponent {

  isLoggedIn!: boolean;
  isAdmin!: boolean;

  constructor(
    private router: Router,

  ) {
    if (localStorage.getItem('user')) {
      this.isLoggedIn = true;
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.isAdmin = user.isAdmin
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    window.alert('Bạn đã đăng xuất')
    this.router.navigate(['/home']);
  }

}

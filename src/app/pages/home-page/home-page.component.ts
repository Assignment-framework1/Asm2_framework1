import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { IProduct } from 'src/interface/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products!: any;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(products => {

      this.products = products.data;
    });
  }

}

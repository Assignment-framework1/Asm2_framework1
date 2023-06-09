import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products!: any;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(products => {

      this.products = products.data;
    });
  }
}

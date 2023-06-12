import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products!: any[];
  search: any = {
    name: ""
  }
  searchs: any = []
  constructor(private productService: ProductService
  ) {
    this.productService.getAll().subscribe(products => {

      this.products = products.data;
    });
  }
  onHandleSubmit() {

    this.productService.searchProduct(this.search).subscribe((data) => {
      this.searchs = data
      console.log(this.searchs[0]);
      this.products = this.products.filter((products) => products._id == this.searchs[0]._id)
    }
    )
  }
}

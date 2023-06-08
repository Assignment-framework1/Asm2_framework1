import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { IProduct } from 'src/interface/models';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  products!: any[];
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((data) => {
      this.products = data.data;
    });
  }

  removeItem(id: any) {
    const confirm = window.confirm('Are you sure you want to delete');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((item) => item._id !== id);
      });
    }
  }
}

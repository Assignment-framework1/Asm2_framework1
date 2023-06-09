import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  products!: any;
  quantity: number = 1;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.productService.getById(id).subscribe((products) => {
        this.products = products.data;
      });
    });
  }
  handleQuantity(val: string) {
    if (this.quantity < 20 && val === 'plus') {
      this.quantity += 1;
    } else if (this.quantity > 1 && val === 'min') {
      this.quantity -= 1;
    }
  }
}

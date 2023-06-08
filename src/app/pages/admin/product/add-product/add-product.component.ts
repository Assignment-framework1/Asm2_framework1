import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product/product.service';
import { CategoryForm } from 'src/interface/models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  categories!: any[];

  productForm = this.fb.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    origin_price: [0, Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required],
    size: [['', Validators.required]],
    category_id: ['', Validators.required],
    brand: ['', Validators.required],
    quantity: [0, Validators.required],
  });

  constructor(
    private productService: ProductService,
    private categoryService: CategoryForm,
    private fb: FormBuilder
  ) {}

  onHandleAddProduct() {}
}

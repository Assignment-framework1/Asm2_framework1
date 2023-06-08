import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';
import { SizeService } from 'src/app/service/size/size.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  categories!: any[];
  sizes!: any[];
  status!: any;

  productForm = this.fb.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    origin_price: [0, Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required],
    category_id: ['', Validators.required],
    brand: ['', Validators.required],
    quantity: [0, Validators.required],
  });

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private sizeService: SizeService,
    private fb: FormBuilder
  ) {
    this.categoryService
      .getAll()
      .subscribe((category) => (this.categories = category));
    this.sizeService.getAll().subscribe((data) => this.sizes = data.data);
  }

  onHandleAddProduct() {
    const quantity = this.productForm.value.quantity;
    if (quantity! > 0) {
      this.status = true;
    } else {
      this.status = false;
    }
    const product: any = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      origin_price: this.productForm.value.origin_price || 0,
      image: this.productForm.value.image || '',
      description: this.productForm.value.description || '',
      size: this.sizes || '',
      category_id: this.productForm.value.category_id || '',
      brand: this.productForm.value.brand || '',
      quantity: this.productForm.value.quantity || 0,
      status: this.status,
    };
    this.productService
      .addProduct(product)
      .subscribe((data) => console.log(data.message));
  }
}

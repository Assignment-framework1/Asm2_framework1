import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categoryForm = this.cate.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(private categoryservice: CategoryService, private cate: FormBuilder) { }

  onHandleAddCategory() {
    const category: any = {
      name: this.categoryForm.value.name || '',
      description: this.categoryForm.value.description || '',
    };
    
    this.categoryservice
      .addCategory(category)
      .subscribe((category) => console.log(category.message));

  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category/category.service';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  category!: any;
  id!: string;
  name!: string;
  description!: string;

  categoryForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.categoryService.getById(id).subscribe((category) => {
        this.category = category
        console.log(this.category);
        this.id = this.category._id;
        this.name = this.category.name;
        this.description = this.category.description;
        console.log(this.id);
      });
    });
  }

  onHandleEditCategory() {
    const category: any = {
      name: this.categoryForm.value.name || '',
      description: this.categoryForm.value.description || '',
    };
    this.categoryService.editCategory(this.id, category).subscribe((category) => {
      console.log(category.message);
    });
  }
}

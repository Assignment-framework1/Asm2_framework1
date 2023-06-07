import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category/category.service';
import { ICategory } from 'src/interface/models';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  categorys!: any[];
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe((data) => (this.categorys = data));
  }
  onHandleRemoveCategory(id: any) {
    this.categoryService.delete(id).subscribe(() => {
      this.categorys = this.categorys.filter((categorys) => categorys._id != id);
    });
  }
}

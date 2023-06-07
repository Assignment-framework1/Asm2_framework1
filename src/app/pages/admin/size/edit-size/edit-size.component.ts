import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SizeService } from 'src/app/service/size/size.service';
import { ISize } from 'src/interface/models';
import { ActivatedRoute } from '@angular/router';
import { string } from 'yup';
import { __values } from 'tslib';

@Component({
  selector: 'app-edit-size',
  templateUrl: './edit-size.component.html',
  styleUrls: ['./edit-size.component.css'],
})
export class EditSizeComponent {
  size!: any;
  id!: string;
  name!: string;
  description!: string;

  sizeForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(
    private sizeService: SizeService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.sizeService.getById(id).subscribe((size) => {
        this.size = size
        this.id = this.size.data._id
        this.name = this.size.data.name;
        this.description = this.size.data.description;
      });
    });
  }

  onHandleEditSize() {
    const size: any = {
      name: this.sizeForm.value.name || '',
      description: this.sizeForm.value.description || '',
    };
    this.sizeService.editSize(this.id, size).subscribe((size) => {
      console.log(size.message);
    });
  }
}

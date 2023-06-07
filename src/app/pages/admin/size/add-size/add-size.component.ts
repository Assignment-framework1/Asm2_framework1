import { Component } from '@angular/core';
import { ISize } from 'src/interface/models';
import { SizeService } from 'src/app/service/size/size.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-size',
  templateUrl: './add-size.component.html',
  styleUrls: ['./add-size.component.css'],
})
export class AddSizeComponent {
  sizeForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(private sizeService: SizeService, private fb: FormBuilder) {}

  onHandleAddSize() {
    const size: any = {
      name: this.sizeForm.value.name || '',
      description: this.sizeForm.value.description || '',
    };
    this.sizeService
      .addSize(size)
      .subscribe((size) => console.log(size.message));
  }
}

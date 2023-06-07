import { Component } from '@angular/core';
import { SizeService } from 'src/app/service/size/size.service';
import { ISize } from 'src/interface/models';

@Component({
  selector: 'app-list-size',
  templateUrl: './list-size.component.html',
  styleUrls: ['./list-size.component.css'],
})
export class ListSizeComponent {
  sizes!: any[];
  constructor(private sizeService: SizeService) {
    this.sizeService.getAll().subscribe((data) => this.sizes = data.data);
  }

  onHandleRemoveSize(id: any) {
    // this.sizeService.deleteSize(id).subscribe(() => {
    //   this.sizes = this.sizes.filter((size) => size._id != id);
    // });
  }
}

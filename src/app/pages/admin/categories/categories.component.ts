import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';
import { Category } from 'src/app/object/category';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  category$: Observable<any> | undefined;
  isSidePanelVisible: boolean = false;
  categoryObj: Category = new Category();
  @ViewChild('categoryForm') categoryForm: NgForm | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.category$ = this.productService.getCategory().pipe(
      map((item: any) => {
        return item.data;
      }),
      delay(300)
    );
  }

  onSave() {
    this.productService.saveCategory(this.categoryObj).subscribe((res: any) => {
      if (res.result) {
        alert('Category Created');
        this.getAllCategories();
        this.onReset();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id: any) {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.productService.deleteCategory(id).subscribe((res: any) => {
        if (res.result) {
          alert('Category Deleted');
          this.getAllCategories();
        }
        else {
          alert(res.message);
        }
      })
    }
  }

  onReset() {
    this.categoryForm?.reset();
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
    this.onReset();
  }
}

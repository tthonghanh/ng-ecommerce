import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';
import { Product } from 'src/app/object/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild('productForm') productForm: NgForm = {} as NgForm;
  isSidePanelVisible: boolean = false;
  productObject: Product = new Product();

  categoryList: any[] = [];
  productList$: Observable<any> | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService
      .getCategory()
      .pipe(delay(300))
      .subscribe((res: any) => {
        this.categoryList = res.data;
      });
  }

  getProducts() {
    this.productList$ = this.productService.getProduct().pipe(
      delay(300),
      map((res: any) => {
        return res.data;
      })
    );
  }

  onSave() {
    this.productService
      .saveProduct(this.productObject)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Product Created');
          this.getProducts();
          this.onReset();
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(item: Product) {
    this.productObject = item;
    this.openSidePanel();
  }

  onUpdate() {
    this.productService
      .updateProduct(this.productObject)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Product Updated');
          this.getProducts();
          this.onReset();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(item: Product) {
    const isDelete = confirm('Are you sure want to delete this product?');
    if (isDelete) {
      this.productService
        .deleteProduct(item.productId)
        .subscribe((res: any) => {
          if (res.result) {
            alert('Product Deleted');
            this.getProducts();
          } else {
            alert(res.message);
          }
        });
    }
  }

  onReset() {
    this.productForm.reset();
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
    this.onReset();
  }
}

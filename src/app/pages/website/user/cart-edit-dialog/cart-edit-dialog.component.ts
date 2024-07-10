import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddToCart } from 'src/app/object/addToCart';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart-edit-dialog',
  templateUrl: './cart-edit-dialog.component.html',
  styleUrls: ['./cart-edit-dialog.component.css'],
})
export class CartEditDialogComponent {
  quantity: number = this.data.item.quantity;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  dec() {
    this.quantity--;
  }

  inc() {
    this.quantity++;
  }

  updateCart() {
    const isConfirm = confirm(
      'Are you sure update quantity this product in your cart?'
    );
    if (isConfirm) {
      this.productService
        .deleteProductFromCartById(this.data.item.cartId)
        .subscribe((res: any) => {
          if (res.result) {
            const addToCartObj = new AddToCart();
            addToCartObj.custId = this.data.item.custId;
            addToCartObj.productId = this.data.item.productId;
            addToCartObj.quantity = this.quantity;
            this.productService
              .addToCart(addToCartObj)
              .subscribe((res: any) => {
                if (res.result) {
                  this.toastr.success('Quantity Updated', 'Successfully');
                  this.route.navigate(['/user/cart', this.data.item.custId]).then(() => window.location.reload());
                }
              });
          } else alert(res.message);
        });
    }
  }
}

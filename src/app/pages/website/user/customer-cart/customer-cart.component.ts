import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, map, Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';
import { CartEditDialogComponent } from '../cart-edit-dialog/cart-edit-dialog.component';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css'],
})
export class CustomerCartComponent implements OnInit {
  cartItem$: Observable<any> | undefined;
  cart: any[] = [];
  userId: number | null = this.loginService.getUserId();
  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCartItem();

    this.productService.cartUpdated$.subscribe((res: any) => {
      this.getCartItem();
    });
  }

  getCartItem() {
    this.cartItem$ = this.productService.getCartByCustId(this.userId).pipe(
      map((res: any) => {
        return res.data;
      }),
      delay(300)
    );

    this.cartItem$?.subscribe((res: any) => {
      this.cart = res as any[];
    });
  }

  deleteCartItem(cartId: any) {
    const isConfirm = confirm(
      'Are you sure delete this product from your cart?'
    );
    if (isConfirm) {
      this.productService
        .deleteProductFromCartById(cartId)
        .subscribe((res: any) => {
          if (res.result) {
            this.productService.cartUpdated$.next(true);
            this.getCartItem();
            this.toastr.success('Delete successfully', 'Product deleted');
          } else alert(res.message);
        });
    }
  }

  calculateTotal() {
    let total = 0;
    for (let item of this.cart) {
      total = total + item.quantity * item.productPrice;
    }
    return total;
  }

  getTotalItems() {
    let total = 0;
    for (let item of this.cart) {
      total = total + item.quantity;
    }
    return total;
  }

  navigateToCheckout() {
    const userId = this.loginService.getUserId();
    if (userId) return this.router.navigate(['user/check-out', userId]);
    else {
      this.toastr.warning(
        'You have to log-in to check-out',
        'Have not log-in yet'
      );
      return undefined;
    }
  }

  increase(item: any) {
    item.quantity++;
  }

  decrease(item: any) {
    item.quantity--;
  }

  openEditDialog(item: any) {
    this.matDialog.open(CartEditDialogComponent, {
      data: {
        item: item
      }
    })
  }
}

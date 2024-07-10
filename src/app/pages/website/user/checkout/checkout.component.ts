import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { PlaceOrder } from 'src/app/object/placeOrder';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  placeOrderObj: PlaceOrder = new PlaceOrder();
  userId?: number | null = this.loginService.getUserId();
  cart: any[] = [];
  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCartItem();
  }

  getCartItem() {
    this.productService
      .getCartByCustId(this.userId)
      .pipe(delay(300))
      .subscribe((res: any) => {
        this.cart = res.data;
        this.calculateTotal();
      });
  }

  calculateTotal() {
    let total = 0;
    for (let item of this.cart) {
      total = total + item.quantity * item.productPrice;
    }
    this.placeOrderObj.totalInvoiceAmount = total;
    return total;
  }

  getTotalItems() {
    let total = 0;
    for (let item of this.cart) {
      total = total + item.quantity;
    }
    return total;
  }

  onOrder() {
    if (this.userId) {
      this.placeOrderObj.custId = this.userId;
    }
    this.productService.placeOrder(this.placeOrderObj).subscribe((res: any) => {
      if (res.result) {
        this.toastr.success('Your order has been created', 'Success');
        this.router.navigate(['user/order-list', this.userId]);
      } else {
        alert(res.message);
      }
    })
  }
}

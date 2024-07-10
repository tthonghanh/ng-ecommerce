import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, map, Observable, reduce, switchMap } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  category$: Observable<any> = {} as Observable<any>;
  isLogin: boolean = sessionStorage.getItem('user') ? true : false;
  userId: number | undefined | null;
  userCart: any[] = [];
  totalProduct: number = 0;
  cartCount$: Observable<number> | undefined;
  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userId = this.loginService.getUserId();
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.isUserLogin();
    if (this.isLogin) {
      this.getCartByCustId(this.userId);
      this.calculateTotal();
    }
    this.productService.cartUpdated$.subscribe((res: any) => {
      if (res) {
        this.getCartByCustId(this.loginService.getUserId());
        this.calculateTotal();
      }
    });
  }

  isUserLogin() {
    this.loginService.isUserLogin.subscribe((res: any) => {
      this.isLogin = sessionStorage.getItem('user') ? true : false;
    });
  }

  getCartByCustId(id: any) {
    this.productService
      .getCartByCustId(id)
      .subscribe((res: any) => {
        if (res.result) {
          this.userCart = res.data;
        }
      });
  }

  calculateTotal() {
    this.cartCount$ = this.productService
      .getCartByCustId(this.userId)
      .pipe(
        map((res: any) =>
          res.data.reduce((total: any, item: any) => total + item.quantity, 0)
        )
      );
  }

  navigateToCategory(cate: any) {
    return this.router.navigate(['/categories', cate.categoryId]);
  }

  navigateToCart() {
    const userId = this.loginService.getUserId();
    if (userId) return this.router.navigate(['/user/cart', userId]);
    else {
      this.toastr.warning(
        'You have to log-in to see the cart',
        'Have not log-in yet'
      );
      return undefined;
    }
  }

  navigateToOrderHistory() {
    const userId = this.loginService.getUserId();
    if (userId) return this.router.navigate(['/user/order-list', userId]);
    else {
      this.toastr.warning(
        'You have to log-in to see order history',
        'Have not log-in yet'
      );
      return undefined;
    }
  }

  navigateToCheckout() {
    const userId = this.loginService.getUserId();
    if (userId) return this.router.navigate(['/user/check-out', userId]);
    else {
      this.toastr.warning(
        'You have to log-in to check-out',
        'Have not log-in yet'
      );
      return undefined;
    }
  }

  getAllCategories() {
    this.category$ = this.productService.getCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  onLogout() {
    this.loginService.onLogout();
  }
}

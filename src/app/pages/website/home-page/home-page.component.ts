import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
  Observable,
  Subject,
} from 'rxjs';
import { AddToCart } from 'src/app/object/addToCart';
import { Product } from 'src/app/object/product';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  product$: Observable<any> | undefined;
  category$: Observable<any> | undefined;
  cart$: Observable<any> | undefined;
  userCart: any[] = [];
  userId: number | null = 0;
  totalProduct: number = 0;
  addToCartObj = new AddToCart();
  private searchText$ = new Subject<string>();
  searchText = '';
  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    private toastr: ToastrService,
  ) {
    this.userId = this.loginService.getUserId();
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getSearchText();
    if (this.userId) this.getCart();
    this.productService.cartUpdated$.subscribe((res: any) => {
      this.getCart();
    });
  }

  getAllProducts() {
    this.product$ = this.productService.getProduct().pipe(
      map((item: any) => {
        return item.data;
      }),
      delay(300)
    );
  }

  getAllCategories() {
    this.category$ = this.productService.getCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  getCart() {
    this.productService
      .getCartByCustId(this.userId)
      .subscribe((res: any) => (this.userCart = res.data));
  }

  addToCart(product: any) {
    if (!this.userId) {
      this.toastr.warning(
        'You have to log-in to add product',
        'Have not log-in yet'
      );
    } else {
      this.addToCartObj.custId = this.userId;
      this.addToCartObj.productId = product.productId;
      this.addToCartObj.quantity = product.quantity || 1;
      this.productService.addToCart(this.addToCartObj).subscribe((res: any) => {
        if (res.result) {
          if (this.isProductInCart(product) == false)
            this.toastr.success('Product is added', 'Added');
          else this.toastr.success('Product quantity is updated', 'Updated');
          this.productService.cartUpdated$.next(true);
        } else {
          alert(res.message);
        }
      });
    }
  }

  getQuantity(product: any) {
    const cartItem = this.userCart.find(
      (item) => item.productId == product.productId
    );
    if (cartItem) return cartItem.quantity;
    else return 1;
  }

  isProductInCart(product: any): boolean {
    const cartItem = this.userCart.find(
      (item) => item.productId == product.productId
    );
    if (cartItem) return true;
    else return false;
  }

  setQuantity(product: Product, quantity: number) {
    const cartItem = this.userCart.find(
      (item) => item.productId == product.productId
    );
    if (cartItem) cartItem.quantity = quantity;
  }

  increaseProduct(product: any) {
    if (this.getQuantity(product) != 1)
      product.quantity = this.getQuantity(product);
    if (!product.quantity) product.quantity = 1;
    product.quantity++;
    this.setQuantity(product, product.quantity);
  }

  decreaseProduct(product: any) {
    if (this.getQuantity(product) != 1)
      product.quantity = this.getQuantity(product);
    if (product.quantity && product.quantity > 1) product.quantity--;
    this.setQuantity(product, product.quantity);
  }

  updateProduct(product: any) {
    const cartItem = this.userCart.find(
      (item) => item.productId == product.productId
    );

    const isConfirm = confirm(
      'Are you sure update quantity this product in your cart?'
    );
    if (isConfirm) {
      this.productService
        .deleteProductFromCartById(cartItem.cartId)
        .subscribe((res: any) => {
          if (res.result) {
            this.addToCart(product);
          } else alert(res.message);
        });
    }
  }

  getSearchText() {
    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(text => this.searchText = text)
  }

  onSearch(text: any) {
    this.searchText$.next(text);
  }
}

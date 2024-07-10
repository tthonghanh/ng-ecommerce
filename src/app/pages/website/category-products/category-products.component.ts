import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, map, Observable, switchMap } from 'rxjs';
import { AddToCart } from 'src/app/object/addToCart';
import { Product } from 'src/app/object/product';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css'],
})
export class CategoryProductsComponent implements OnInit {
  product$: Observable<any> = {} as Observable<any>;
  userCart: any[] = [];
  userId: number | null = 0;
  categoryName: string | undefined;
  category: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.userId = this.loginService.getUserId();
  }
  ngOnInit(): void {
    this.getProductByCategoryId();
    this.getCart();
    this.productService.cartUpdated$.subscribe((res: any) => {
      this.getCart();
    });
  }

  getProductByCategoryId() {
    this.product$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((id) => this.productService.getProductByCategoryId(id)),
      map((res: any) => {
        return res.data;
      }),
      delay(300)
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
      const addToCartObj = new AddToCart();
      addToCartObj.custId = this.userId;
      addToCartObj.productId = product.productId;
      addToCartObj.quantity = product.quantity || 1;
      this.productService.addToCart(addToCartObj).subscribe((res: any) => {
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
}

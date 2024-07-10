import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productId : number = 0;
  @Input() productImage : string = '';
  @Input() cateName: string = '';
  @Input() productName: string = '';
  @Input() productPrice: number = 0;
  @Input() isProductInCart: boolean = false;
  @Input() quantity: number = 0;
  @Output() productAddToCart = new EventEmitter();
  @Output() decreaseQuantity = new EventEmitter();
  @Output() increaseQuantity = new EventEmitter();
  @Output() updateProductInCart = new EventEmitter();

  constructor(private router: Router) {}
  decrement() {
    this.decreaseQuantity.emit();
  }

  increment() {
    this.increaseQuantity.emit();
  }

  addToCart() {
    this.productAddToCart.emit();
  }

  updateCart() {
    this.updateProductInCart.emit();
  }

  navigateToProductDetail() {
    this.router.navigate(['/product-detail', this.productId]);
  }
}

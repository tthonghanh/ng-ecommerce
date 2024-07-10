export class AddToCart {
  cartId: number;
  custId: number | null;
  productId: number;
  quantity: number;
  addedDate: Date;

  constructor() {
    this.cartId = 0;
    this.custId = 0;
    this.productId = 0;
    this.quantity = 0;
    this.addedDate = new Date();
  }
};

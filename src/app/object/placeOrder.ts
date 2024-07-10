export class PlaceOrder {
  saleId: number;
  custId: number;
  saleDate: Date;
  totalInvoiceAmount: number;
  discount: number;
  paymentNaration: string;
  deliveryAddress1: string;
  deliveryAddress2: string;
  deliveryCity: string;
  deliveryPinCode: string;
  deliveryLandMark: string;
  isCanceled: boolean;

  constructor() {
    this.saleId = 0;
    this.custId = 0;
    this.saleDate = new Date();
    this.totalInvoiceAmount = 0;
    this.discount = 0;
    this.paymentNaration = '';
    this.deliveryAddress1 = '';
    this.deliveryAddress2 = '';
    this.deliveryCity = '';
    this.deliveryPinCode = '';
    this.deliveryLandMark = '';
    this.isCanceled = false;
  }
}

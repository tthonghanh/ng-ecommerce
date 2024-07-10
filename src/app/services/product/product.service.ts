import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Constant } from '../constant/constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartUpdated$ : Subject<boolean> = new Subject();
  orderUpdated$ : Subject<boolean> = new Subject();
  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }

  getProduct() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS);
  }

  getProductByCategoryId(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY_ID + id);
  }

  saveProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, obj);
  }

  saveCategory(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_CATEGORY, obj);
  }

  updateProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT, obj);
  }

  deleteProduct(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id);
  }

  deleteCategory(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_CATEGORY + id);
  }

  addToCart(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART, obj);
  }

  getCartByCustId(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CART_BY_CUSTOMER_ID + id);
  }

  deleteProductFromCartById(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT_FROM_CART_BY_ID + id);
  }

  placeOrder(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.PLACE_ORDER, obj);
  }

  getAllSaleByCustomerId(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_SALE_BY_CUST_ID + id);
  }

  cancelOrderBySaleId(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.CANCEL_ORDER_BY_SALE_ID + id);
  }

  openSaleBySaleId(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.OPEN_SALE_BY_SALE_ID + id);
  }

  getAllSales() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_SALE);
  }
}

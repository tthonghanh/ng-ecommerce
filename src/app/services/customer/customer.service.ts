import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CUSTOMERS);
  }

  getCustomerById(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CUSTOMER_BY_ID + id);
  }
}

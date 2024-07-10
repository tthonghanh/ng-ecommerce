import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent {
  saleDetail$ : Observable<any> | undefined;
  customer$ : Observable<any> | undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService,
    private customerService: CustomerService
  ) {}
  ngOnInit(): void {
    this.saleDetail();
    this.getCustomerById();
  }

  saleDetail() {
    this.saleDetail$ = this.productService.openSaleBySaleId(this.data.saleId).pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  getCustomerById() {
    this.customer$ = this.customerService.getCustomerById(this.data.custId).pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }
}

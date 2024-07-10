import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { delay, map, Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductService } from 'src/app/services/product/product.service';
import { OrderDetailComponent } from '../order-detail/order-detail.component';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  sale$ : Observable<any> | undefined;
  userId : number | null = 0;
  constructor(
    private productSevice: ProductService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private matDialog: MatDialog
  ) {
    if (this.loginService.isUserLogin) this.userId = this.loginService.getUserId();
  }

  ngOnInit(): void {
    this.getAllOrder();
    this.productSevice.orderUpdated$.subscribe((res: any) => this.getAllOrder());
  }

  getAllOrder() {
    this.sale$ = this.productSevice.getAllSaleByCustomerId(this.userId).pipe(
      delay(300),
      map((res: any) => {
        return res.data;
      })
    )
  }

  onCancel(id: any) {
    const isCancel = confirm('Do you want to cancel this order?');
    if (isCancel) {
        this.productSevice.cancelOrderBySaleId(id).subscribe((res: any) => {
        if (res.result) {
          this.productSevice.orderUpdated$.next(true);
          this.getAllOrder();
          this.toastr.success('Your order is canceled', 'Cancel Successfully');
        }
        else {
          alert(res.message);
        }
      })
    }
  }

  openOrderDetailDialog(order: any) {
    this.matDialog.open(OrderDetailComponent, {
      data: {
        saleId: order.saleId,
        totalInvoiceAmount: order.totalInvoiceAmount
      },
      height: '400px',
      width: '900px',
    });
  }
}

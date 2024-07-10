import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { AdminOrderDetailComponent } from '../admin-order-detail/admin-order-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  order$ : Observable<any> | undefined;

  constructor(private productService: ProductService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.order$ = this.productService.getAllSales().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  openOrderDetailDialog(order: any) {
    this.matDialog.open(AdminOrderDetailComponent, {
      data: {
        saleId: order.saleId,
        custId: order.custId,
        saleDate: order.saleDate,
        totalInvoiceAmount: order.totalInvoiceAmount,
        discount: order.discount,
        paymentNaration: order.paymentNaration,
        deliveryAddress1: order.deliveryAddress1,
        deliveryAddress2: order.deliveryAddress2,
        deliveryCity: order.deliveryCity,
        deliveryPinCode: order.deliveryPinCode,
        deliveryLandMark: order.deliveryLandMark,
      },
      height: '500px',
      width: '900px',
    });
  }
}

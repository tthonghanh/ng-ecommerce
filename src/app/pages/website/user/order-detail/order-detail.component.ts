import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  saleDetail$ : Observable<any> | undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.saleDetail();
  }

  saleDetail() {
    this.saleDetail$ = this.productService.openSaleBySaleId(this.data.saleId).pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }
}

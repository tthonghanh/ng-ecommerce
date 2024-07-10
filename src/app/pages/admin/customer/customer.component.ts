import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer$ : Observable<any> | undefined;
  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customer$ = this.customerService.getAllCustomers().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }
}

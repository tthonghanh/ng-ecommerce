import { Routes } from '@angular/router';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LandingComponent } from '../landing/landing.component';

export const UserRoute: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'cart/:id', component: CustomerCartComponent, },
      { path: 'check-out/:id', component: CheckoutComponent },
      { path: 'order-list/:id', component: OrderListComponent },
    ],
  },
];

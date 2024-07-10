import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserRoute } from "./user.routes";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CustomerCartComponent } from "./customer-cart/customer-cart.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from "@angular/forms";
import { CartEditDialogComponent } from './cart-edit-dialog/cart-edit-dialog.component';
@NgModule({
  declarations: [
    CheckoutComponent,
    CustomerCartComponent,
    OrderDetailComponent,
    OrderListComponent,
    CartEditDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoute),
    MatDialogModule,
    FormsModule,
    MatButtonModule
  ]
})
export class UserModule {}

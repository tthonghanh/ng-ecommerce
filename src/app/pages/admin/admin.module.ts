import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { ProductsComponent } from "./products/products.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CustomerComponent } from "./customer/customer.component";
import { OrderComponent } from "./order/order.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminRoute } from "./admin.routes";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { AdminOrderDetailComponent } from './admin-order-detail/admin-order-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    LayoutComponent,
    ProductsComponent,
    CategoriesComponent,
    CustomerComponent,
    OrderComponent,
    LoginComponent,
    AdminOrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoute),
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AdminModule {}

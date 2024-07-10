import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { ProductsComponent } from "./products/products.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CustomerComponent } from "./customer/customer.component";
import { OrderComponent } from "./order/order.component";

export const AdminRoute : Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'customers', component: CustomerComponent},
      { path: 'orders', component: OrderComponent},
    ],
  },
]

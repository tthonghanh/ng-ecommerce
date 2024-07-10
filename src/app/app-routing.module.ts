import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { HomePageComponent } from './pages/website/home-page/home-page.component';
import { CustomerLoginComponent } from './pages/website/customer-login/customer-login.component';
import { ProductDetailComponent } from './pages/website/product-detail/product-detail.component';
import { CanMatchAdminGuard } from './guards/admin.guard';
import { CanMatchUserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin-log-in', component: LoginComponent },
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'home', pathMatch: 'full', component: HomePageComponent },
      { path: 'log-in', component: CustomerLoginComponent },
      { path: 'categories/:id', component: CategoryProductsComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/website/user/user.module').then((m) => m.UserModule),
    canMatch: [CanMatchUserGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canMatch: [CanMatchAdminGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

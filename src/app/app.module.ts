import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomerLoginComponent } from './pages/website/customer-login/customer-login.component';
import { HomePageComponent } from './pages/website/home-page/home-page.component';
import { ProductCardComponent } from './pages/website/product-card/product-card.component';
import { ProductDetailComponent } from './pages/website/product-detail/product-detail.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CategoryProductsComponent,
    HomePageComponent,
    CustomerLoginComponent,
    ProductCardComponent,
    ProductDetailComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [
    FilterPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

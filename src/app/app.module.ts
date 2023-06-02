import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SingnupPageComponent } from './pages/singnup-page/singnup-page.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { ListProductComponent } from './pages/admin/list-product/list-product.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    CartPageComponent,
    CheckoutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    AboutPageComponent,
    SigninPageComponent,
    SingnupPageComponent,
    DetailProductComponent,
    ListProductComponent,
    ListUserComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

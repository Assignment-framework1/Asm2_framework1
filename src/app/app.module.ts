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
import { ListProductComponent } from './pages/admin/product/list-product/list-product.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { AddProductComponent } from './pages/admin/product/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/product/edit-product/edit-product.component';
import { CheckoutComponent } from './pages/admin/checkout/checkout.component';
import { ListSizeComponent } from './pages/admin/size/list-size/list-size.component';
import { ListCategoryComponent } from './pages/admin/list-category/list-category.component';
import { EditCategoryComponent } from './pages/admin/edit-category/edit-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { EditSizeComponent } from './pages/admin/size/edit-size/edit-size.component';
import { AddSizeComponent } from './pages/admin/size/add-size/add-size.component';
import { ListCheckOutComponent } from './pages/admin/list-check-out/list-check-out.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

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
    CheckoutComponent,
    ListSizeComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    EditSizeComponent,
    AddSizeComponent,
    ListCheckOutComponent,
    ContactPageComponent,
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

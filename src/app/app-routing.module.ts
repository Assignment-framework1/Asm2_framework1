import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SingnupPageComponent } from './pages/singnup-page/singnup-page.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ListProductComponent } from './pages/admin/list-product/list-product.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'detail', component: DetailProductComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'checkout', component: CheckoutPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'signin', component: SigninPageComponent },
      { path: 'signup', component: SingnupPageComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'product', component: ListProductComponent },
      { path: 'user', component: ListUserComponent },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

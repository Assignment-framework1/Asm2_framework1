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
import { ListProductComponent } from './pages/admin/product/list-product/list-product.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { AddProductComponent } from './pages/admin/product/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/product/edit-product/edit-product.component';
import { ListCategoryComponent } from './pages/admin/list-category/list-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { EditCategoryComponent } from './pages/admin/edit-category/edit-category.component';
import { ListCheckOutComponent } from './pages/admin/list-check-out/list-check-out.component';
import { ListSizeComponent } from './pages/admin/list-size/list-size.component';
import { AddSizeComponent } from './pages/admin/add-size/add-size.component';
import { EditSizeComponent } from './pages/admin/edit-size/edit-size.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

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
      { path: 'contact', component: ContactPageComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: ListProductComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/edit', component: EditProductComponent },
      { path: 'category', component: ListCategoryComponent },
      { path: 'addcategory', component: AddCategoryComponent },
      { path: 'editcategory', component: EditCategoryComponent },
      { path: 'listcheckout', component: ListCheckOutComponent },
      { path: 'size', component: ListSizeComponent },
      { path: 'size/add', component: AddSizeComponent },
      { path: 'size/edit', component: EditSizeComponent },
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

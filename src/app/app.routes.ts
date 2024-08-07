import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { ListCartComponent } from './pages/list-cart/list-cart.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'products',
    component: ListProductComponent,
  },
  {
    path: 'product/:id',
    component: DetailProductComponent,
  },
  {
    path: 'cart',
    component: ListCartComponent,
  },
];

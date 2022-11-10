import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdproComponent } from './adpro/adpro.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'Dashboard',component : DashboardComponent},
  {path: 'product',component : ProductComponent},
  {path: 'cart',component : CartComponent},
  {path : 'adpro',component: AdproComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

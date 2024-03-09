import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { registerComponent } from './modules/register/register.component'
import { guardsGuard } from '@guards/guards.guard';
import { saleComponent } from '@modules/sale/sale.component';
import { cartComponent } from '@modules/cart/cart.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
    import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [guardsGuard],
  },
  {
    path: 'register',
    component: registerComponent
  },
  {
    path: 'sale',
    component: saleComponent
  },
  {
    path: 'cart',
    component: cartComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }

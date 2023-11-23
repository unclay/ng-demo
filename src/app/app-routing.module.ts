import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { CarsComponent } from './cars/cars.component';
import { BatteryComponent } from './cars/battery/battery.component';
import { SettingComponent } from './setting/setting.component';
import { PermissionComponent } from './setting/permission/permission.component';
import { UserComponent } from './user/user.component';
import { UserSettingComponent } from './user/user-setting/user-setting.component';
import { LogoutComponent } from './user/logout/logout.component';
import { PartsComponent } from './cars/parts/parts.component';
import { RefundComponent } from './refund/refund.component';
import { PaysComponent } from './pays/pays.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  { path: 'cars', component: CarsComponent },
  { path: 'cars/battery', component: BatteryComponent },
  { path: 'cars/parts', component: PartsComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'setting/permission', component: PermissionComponent },
  { path: 'refund', component: RefundComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/setting', component: UserSettingComponent },
  { path: 'user/logout', component: LogoutComponent },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  //   canMatch: [authGuard]
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
  //   data: { preload: true }
  // },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

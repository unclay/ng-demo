import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';

// common
import { HeadersComponent } from './common/headers/headers.component';
import { SidebarsComponent } from './common/sidebars/sidebars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { BatteryComponent } from './cars/battery/battery.component';
import { PaysComponent } from './pays/pays.component';
import { RefundComponent } from './refund/refund.component';
import { SettingComponent } from './setting/setting.component';
import { PermissionComponent } from './setting/permission/permission.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './user/logout/logout.component';
import { CarsComponent } from './cars/cars.component';
import { UserSettingComponent } from './user/user-setting/user-setting.component';
import { PartsComponent } from './cars/parts/parts.component';

// store
import { StoreService } from '../store/store.service';
import { reducers } from 'src/store/app.state';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeadersComponent,
    SidebarsComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    BatteryComponent,
    PaysComponent,
    RefundComponent,
    SettingComponent,
    PermissionComponent,
    UserComponent,
    LogoutComponent,
    CarsComponent,
    UserSettingComponent,
    PartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from '@interceptors/auth.interceptor';
import { AuthExpiredInterceptor } from '@interceptors/auth-expired.interceptor';
import { registerComponent } from '@modules/register/register.component';
import { cartComponent } from '@modules/cart/cart.component';
import { saleComponent } from '@modules/sale/sale.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    registerComponent,
    cartComponent,
    saleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   ],
  exports:[
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor, 
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

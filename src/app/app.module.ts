import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerHomeComponent } from './customerhome/customerhome.component';
import { AlertComponent } from './_components';

/**
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { fakeBackendProvider } from './_helpers';
 **/


import { routing } from './app.routing';

import { ChefHomeComponent } from './chef-home/chef-home.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { KlantAccountComponent } from './klantaccount/klantaccount.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { ChefAccountComponent } from './chefaccount/chefaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ChefHomeComponent,
    MenuListComponent,
    CustomerHomeComponent,
    AlertComponent,
    KlantAccountComponent,
    ShoppingCartComponent,
    ChefAccountComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  /**  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],

   **/ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

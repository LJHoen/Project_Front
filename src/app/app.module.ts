import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CustomerHomeComponent } from './customerhome/customerhome.component';
import { AlertComponent } from './_components';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

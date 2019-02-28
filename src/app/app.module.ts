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
import { KlantAccountComponent } from './klantaccount/klantaccount.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { ChefAccountComponent } from './chefaccount/chefaccount.component';
import { ChefgegevensComponent } from './chefgegevens/chefgegevens.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ChefHomeComponent,
    CustomerHomeComponent,
    AlertComponent,
    KlantAccountComponent,
    ShoppingCartComponent,
    ChefAccountComponent,
    ChefgegevensComponent,
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

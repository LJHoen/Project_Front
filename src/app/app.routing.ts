import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './home/customerhome.component';
// import { ChefHomeComponent } from './home/chefhome.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {ChefHomeComponent} from './chef-home/chef-home.component';
import { KlantAccountComponent } from './klantaccount/klantaccount.component';
// import { ChefAccountComponent } from './chefaccount/chefaccount.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import {AppComponent} from './app.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chef-home', component: ChefHomeComponent},
  {path: 'klantaccount', component: KlantAccountComponent },
  {path: 'shoppingcart', component: ShoppingCartComponent },
  {path: 'customerhome', component: CustomerHomeComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

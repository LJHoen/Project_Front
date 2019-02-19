import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './home/customerhome.component';
// import { ChefHomeComponent } from './home/chefhome.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { KlantAccountComponent } from './klantaccount/klantaccount.component';
// import { ChefAccountComponent } from './chefaccount/chefaccount.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';

const appRoutes: Routes = [
  { path: '', component: CustomerHomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'klantaccount', component: KlantAccountComponent },
 // {path: 'chefaccount', component: ChefAccountComponent },
  // {path: 'chefhome', component: ChefHomeComponent },
  {path: 'shoppingcart', component: ShoppingCartComponent },
  {path: 'customerhome', component: CustomerHomeComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

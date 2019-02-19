import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAuthService } from './_services';
import { ChefAuthService } from './_services';
import {Chef, Customer} from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EAT ME!';
  currentUser1: Chef;
  currentUser2: Customer;

  constructor(
    private router: Router,
    private chefAuthService: ChefAuthService,
    private customerAuthService: CustomerAuthService
  ) {
    this.chefAuthService.currentUser.subscribe(x => {
      return this.currentUser1 = x;
    });
    this.customerAuthService.currentUser.subscribe( y => {
      return this.currentUser2 = y;
    });
  }

  logout() {
    this.chefAuthService.logout();
    this.customerAuthService.logout();
    this.router.navigate(['/login']);
  }
}

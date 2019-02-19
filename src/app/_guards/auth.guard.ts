import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ChefAuthService, CustomerAuthService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private chefAuthService: ChefAuthService,
    private customerAuthService: CustomerAuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser1 = this.customerAuthService.currentUserValue;
    const currentUser2 = this.chefAuthService.currentUserValue;
    if (currentUser1 || currentUser2) {
      // authorised so return true
      return true;

    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import {CustomerAuthService, MenuService, CustomerService} from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import {Bestelling, Customer, Dish, User} from '../_models';
import {Subscription} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  currentUser: Customer;
  currentUserSubscription: Subscription;

  constructor(
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
    private menuService: MenuService,
    private router: Router,

  ) {
    this.reloadUser();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  onSubmit() {
    this.currentUser.history.push(this.currentUser.currentBestelling);
    this.currentUser.currentBestelling = new Bestelling(0, [], [], 0);
    this.customerService.update(this.currentUser).subscribe();
    this.router.navigate(['./customerhome']);
    this.reloadUser();
  }

  reloadUser() {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    }); }
}

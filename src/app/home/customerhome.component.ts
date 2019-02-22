import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {Chef, Customer} from '../_models';
import { Dish } from '../_models';
import {ChefService, CustomerAuthService, CustomerService} from '../_services';
// import {Menu} from '../Menu';

@Component({ templateUrl: 'customerhome.component.html' })
export class CustomerHomeComponent implements OnInit, OnDestroy {
  currentUser: Customer;
  currentUserSubscription: Subscription;
  dish: Dish;
  chefs: Chef[];

  constructor(
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
    private chefService: ChefService
  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
    this.ngOnDestroy();
     this.loadAllChefs();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  private loadAllChefs() {
    this.chefService.getAll().pipe(first()).subscribe(chefs => {
      this.chefs = chefs;
      console.log(chefs);
    });
  }

  addDish(dish) {
    console.log(this.currentUser);
    this.currentUser.currentOrder.push(dish);
    console.log(this.currentUser.currentOrder);
    this.customerService.update(this.currentUser).subscribe();
    console.log('home test');
  }

}

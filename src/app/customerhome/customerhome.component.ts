import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {Chef, Customer, Bestelling} from '../_models';
import { Dish } from '../_models';
import {ChefService, CustomerAuthService, CustomerService} from '../_services';

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
    });
    this.loadAllChefs();
    console.log('in constructor:' );
    console.log(this.currentUser);
  }

  ngOnInit() {
/*    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });*/
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  private loadAllChefs() {
    this.chefService.getAll().pipe(first()).subscribe(chefs => {
      this.chefs = chefs;
    });
  }

  addDish(dish: Dish) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('in addDish:');
      console.log(this.currentUser);
    });

    if (this.currentUser.currentBestelling === null) {
      this.currentUser.currentBestelling = new Bestelling(0, [], [], 0, parseInt(this.currentUser.id, 10)); }
    console.log(this.currentUser.currentBestelling.dishes.includes(dish));
    // console.log(this.currentUser.currentBestelling);
    const increment = 1;
    console.log(this.currentUser.currentBestelling.dishes);
    let check = false;
    let tempDish;
    for (let d of this.currentUser.currentBestelling.dishes) {
      if (d.id === dish.id) {
        check = true;
        tempDish = d;
        console.log('duplicate found');
      }
    }
    if (check) {
      this.currentUser.currentBestelling.dishCount[this.currentUser.currentBestelling.dishes.indexOf(tempDish)] += increment;
    } else {
      this.currentUser.currentBestelling.dishes.push(dish);
      this.currentUser.currentBestelling.dishCount.push(1);
    }
    this.currentUser.currentBestelling.price = this.updatePrice();
    this.customerService.update(this.currentUser).subscribe( user => {
    } );

  }

  updatePrice() {
    let  totalSum  = 0;
    this.currentUser.currentBestelling.dishes.forEach(dish => {
      totalSum = totalSum + parseInt(dish.price.toString(), 10) * this.currentUser.currentBestelling.dishCount[
        this.currentUser.currentBestelling.dishes.indexOf(dish)];
    });
    return totalSum;

  }

  reloadUser() {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    }); }
}

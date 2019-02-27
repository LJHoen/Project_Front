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
    this.reloadUser();
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
    });
  }

  addDish(dish) {
    if (this.currentUser.currentBestelling === null) { this.currentUser.currentBestelling = new Bestelling(0, [], [], 0); }
    console.log(this.currentUser);
    let increment = 1;
    if (this.currentUser.currentBestelling.dishes.includes(dish, 0)) {
      this.currentUser.currentBestelling.dishCount[this.currentUser.currentBestelling.dishes.indexOf(dish)] += increment;
    } else {
      this.currentUser.currentBestelling.dishes.push(dish);
      this.currentUser.currentBestelling.dishCount.push(1);
    }
    this.currentUser.currentBestelling.price = this.updatePrice();
  }

  updatePrice() {
    let  totalSum  = 0;
    this.currentUser.currentBestelling.dishes.forEach(dish => {
      totalSum = totalSum + parseInt(dish.price.toString(), 10) * this.currentUser.currentBestelling.dishCount[
        this.currentUser.currentBestelling.dishes.indexOf(dish)];
      console.log(totalSum);
    });
    return totalSum;

  }

  reloadUser() {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    }); }
}

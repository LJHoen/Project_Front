import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {Chef, Customer} from '../_models';
import { Dish } from '../_models';
import {ChefService, CustomerAuthService, CustomerService} from '../_services';
import {Menu} from '../Menu';

@Component({ templateUrl: 'customerhome.component.html' })
export class CustomerHomeComponent implements OnInit, OnDestroy {
  currentUser: Customer;
  currentUserSubscription: Subscription;
  dishes: Dish[] = [];
  dish: Dish;
  menus: Menu[];
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
/**
  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }
**/
  private loadAllChefs() {
    this.chefService.getAll().pipe(first()).subscribe(chefs => {
      this.chefs = chefs;
    });
  }
/**
  deleteDish(id: number) {
    this.menuService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllAvailableDishes();
    });
  }

  private loadAllAvailableDishes() {
    this.menuService.getAllAvailable().pipe(first()).subscribe(dishes => {
      this.dishes = dishes;
    });
  }

  addDish(id: number) {
    this.menuService.getById(id).pipe(first()).subscribe( dish => {
       this.currentUser.currentOrder.dishes.push(dish);
       this.currentUser.currentOrder.price += dish.price;
    });
  }
 **/

}

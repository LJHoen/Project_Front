import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { Dish } from '../_models';
import { UserService, MenuService, CustomerAuthService } from '../_services';

@Component({ templateUrl: 'customerhome.component.html' })
export class CustomerHomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  user: User;
  dishes: Dish[] = [];
  dish: Dish;

  constructor(
    private customerAuthService: CustomerAuthService,
    private userService: UserService,
    private menuService: MenuService
  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log(user);
    });
  }

  ngOnInit() {
    /** this.loadAllUsers(); **/
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

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

  deleteDish(id: number) {
    this.menuService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllAvailableDishes();
    });
  }
**/
  private loadAllAvailableDishes() {
    this.menuService.getAllAvailable().pipe(first()).subscribe(dishes => {
      this.dishes = dishes;
    });
  }

  addDish(id: number) {
    this.menuService.getById(id).pipe(first()).subscribe( dish => {
      // this.currentUser.order.dishes.push(dish);
      // this.currentUser.order.price += dish.price;
    });
  }


}

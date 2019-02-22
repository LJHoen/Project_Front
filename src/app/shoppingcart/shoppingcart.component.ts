import { Component, OnInit, OnDestroy } from '@angular/core';
import {CustomerAuthService, MenuService, CustomerService} from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import {Customer, Dish, User} from '../_models';
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
  totalSum: number;

  constructor(
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
    private menuService: MenuService,
    private router: Router,

  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    console.log(this.currentUser);
    this.ngOnDestroy();
    this.totalSum = this.updatePrice();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  onSubmit() {
    console.log('test1');
    this.currentUser.history.push(this.currentUser.currentOrder);
    console.log('test2');
    console.log(this.currentUser.history);
    this.currentUser.currentOrder = [];
    this.customerService.update(this.currentUser).subscribe();
    console.log('test3');
    // this.router.navigate(['./customerhome']);
  }

  updatePrice() {
    let  totalSum  = 0;
    this.currentUser.currentOrder.forEach(dish => {
      totalSum = totalSum + parseInt(dish.price.toString(), 10);
    });
    return totalSum;
  }
}

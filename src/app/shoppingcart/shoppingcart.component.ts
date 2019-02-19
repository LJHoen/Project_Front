import { Component, OnInit } from '@angular/core';
import {CustomerAuthService, MenuService, CustomerService} from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import {Customer, Dish, User} from '../_models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  currentUser: Customer;
  currentUserSubscription: Subscription;

  constructor(
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
    private menuService: MenuService,
    private router: Router
  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.currentUser.orders.push(this.currentUser.currentOrder);
    this.currentUser.currentOrder = null;
    this.customerService.update(this.currentUser);
    this.router.navigate(['./customerhome']);
  }


}

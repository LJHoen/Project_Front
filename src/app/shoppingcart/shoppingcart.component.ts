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
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    console.log(this.currentUser);
    this.ngOnDestroy();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  onSubmit() {
    console.log('test1');
    this.currentUser.history.push(this.currentUser.currentBestelling);
    console.log('test2');
    console.log(this.currentUser.history);
    this.currentUser.currentBestelling = new Bestelling(0, [], [], 0);
    this.customerService.update(this.currentUser).subscribe();
    console.log('test3');
    this.router.navigate(['./customerhome']);
  }
}

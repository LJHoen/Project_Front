import { Component, OnInit, OnDestroy } from '@angular/core';
import {CustomerAuthService, MenuService, CustomerService, ChefService} from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import {Bestelling, Chef, Customer, Dish, User} from '../_models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  currentUser: Customer;
  currentUserSubscription: Subscription;
  chef: Chef;

  constructor(
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
    private chefService: ChefService,
    private menuService: MenuService,
    private router: Router,

  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  onSubmit() {
    this.currentUser.history.push(this.currentUser.currentBestelling);
    if (this.currentUser.currentBestelling.dishes.length > 0) {
      this.chefService.getById(this.currentUser.currentBestelling.dishes[0].creator).subscribe(c => {
        this.chef = c;
        this.chef.bestellingen.push(this.currentUser.currentBestelling);
        this.chefService.update(this.chef).subscribe();
        this.currentUser.currentBestelling = new Bestelling(0, [], [], 0, '');
        this.customerService.update(this.currentUser).subscribe();
        this.router.navigate(['./customerhome']);

      });
    }
    this.reloadUser();
  }

  deleteDish(dish) {
    const index = this.currentUser.currentBestelling.dishes.indexOf(dish);
    this.currentUser.currentBestelling.dishCount[index] -= 1;
    if (this.currentUser.currentBestelling.dishCount[index] < 1) {
      this.currentUser.currentBestelling.dishCount.splice(index, 1);
      this.currentUser.currentBestelling.dishes.splice(index, 1);
    }
    this.customerService.update(this.currentUser).subscribe( user => {
      this.reloadUser();
    });
  }

  reloadUser() {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    }); }
}

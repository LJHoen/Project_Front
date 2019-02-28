import { Component, OnInit, OnDestroy } from '@angular/core';
import {CustomerAuthService, CustomerService} from '../_services';
import {Customer} from '../_models';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Chef} from '../_models';
import {ChefService} from '../_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-chefgegevens',
  templateUrl: './chefgegevens.component.html',
  styleUrls: ['./chefgegevens.component.css']
})
export class ChefgegevensComponent implements OnInit, OnDestroy {
  currentUser: Customer;
  currentUserSubscription: Subscription;
  chef: Chef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
    private chefService: ChefService
  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.reloadUser();

  }
  ngOnInit() {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.chefService.getById(id)
      .subscribe(chef => this.chef = chef);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }
  reloadUser() {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
}

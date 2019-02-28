import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChefAuthService, ChefService, CustomerService} from '../_services';
import { FormBuilder } from '@angular/forms';
import {Chef, Customer} from '../_models';
import {Observable, Subscription} from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chefaccount',
  templateUrl: './chefaccount.component.html',
  styleUrls: ['./chefaccount.component.css']
})
export class ChefAccountComponent implements OnDestroy {
  currentUser: Chef;
  currentUserSubscription: Subscription;
  besteller: Observable<Customer>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private chefAuthService: ChefAuthService,
    private chefService: ChefService,
    private customerService: CustomerService,
  ) {
    this.reloadUser();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  reloadUser() {
    this.currentUserSubscription = this.chefAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    }); }

  updateUser() {
    if ((<HTMLInputElement>document.getElementById('firstName')).value !== '') {
      this.currentUser.firstName = (<HTMLInputElement>document.getElementById('firstName')).value; }
    if ((<HTMLInputElement>document.getElementById('lastName')).value !== '') {
      this.currentUser.lastName = (<HTMLInputElement>document.getElementById('lastName')).value; }
    if ((<HTMLInputElement>document.getElementById('password')).value !== '') {
      this.currentUser.password = (<HTMLInputElement>document.getElementById('password')).value; }
    if ((<HTMLInputElement>document.getElementById('address')).value !== '') {
      this.currentUser.address = (<HTMLInputElement>document.getElementById('address')).value; }
    if ((<HTMLInputElement>document.getElementById('bank')).value !== '') {
      this.currentUser.bankAccount = (<HTMLInputElement>document.getElementById('bank')).value; }
    this.chefService.update(this.currentUser).subscribe();
    this.reloadUser();
  }
}

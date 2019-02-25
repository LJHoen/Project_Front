import { Component, OnInit, OnDestroy } from '@angular/core';
import {CustomerAuthService, CustomerService} from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Customer} from '../_models';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-klantaccount',
  templateUrl: './klantaccount.component.html',
  styleUrls: ['./klantaccount.component.css']
})
export class KlantAccountComponent implements OnDestroy {
  currentUser: Customer;
  currentUserSubscription: Subscription;
  dude: Customer;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
  ) {
    this.reloadUser();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  reloadUser() {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
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
    this.customerService.update(this.currentUser).subscribe();
    this.reloadUser();
}




}

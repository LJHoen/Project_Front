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
export class KlantAccountComponent implements OnInit, OnDestroy {
  currentUser: Customer;
  currentUserSubscription: Subscription;
  detailsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerAuthService: CustomerAuthService,
    private customerService: CustomerService,
  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.ngOnDestroy();
    console.log(this.currentUser);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      address: ['', Validators.required],
      bankAccount: ['', Validators.required],
      history: this.currentUser.history
    });
  }




}

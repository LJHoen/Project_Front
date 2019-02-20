import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AlertService, ChefAuthService, ChefService, CustomerAuthService, CustomerService} from '../_services';
import {Order} from '../_models/order';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private customerAuthService: CustomerAuthService,
    private chefAuthService: ChefAuthService,
    private chefService: ChefService,
    private customerService: CustomerService,
    private alertService: AlertService,
  ) {
    // redirect to home if already logged in
    if (this.chefAuthService.currentUserValue || this.customerAuthService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: null,
      bankAccount: null,
      orders: null,
      currentOrder: null
    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(type: number) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (type === 1 ) {
      this.loading = true;
        this.chefService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
            data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
    } else {
      this.loading = true;
        this.customerService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
            data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
    }
  }
}

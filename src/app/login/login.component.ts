import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, CustomerAuthService, ChefAuthService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerAuthService: CustomerAuthService,
    private chefAuthService: ChefAuthService,
    private alertService: AlertService
  ) {
    // redirect to customerhome if already logged in
    if (this.customerAuthService.currentUserValue || this.chefAuthService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(type: number) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    if (type === 1) {
      this.chefAuthService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data !== undefined && data !== null) {
              this.router.navigate(['chef-home']);
            } else {
            this.alertService.error('Chef account not found');
            this.loading = false; }
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    } else {
      this.customerAuthService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(

          data => {
            if (data !== undefined && data !== null) {
              this.router.navigate(['customerhome']);
            } else {
              this.alertService.falseAccountError('Customer account not found');
              this.loading = false;
            }
          },
          error => {
            this.alertService.falseAccountError(error);
            this.loading = false;
          });
    }
  }
}

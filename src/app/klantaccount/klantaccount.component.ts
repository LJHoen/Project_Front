import { Component, OnInit } from '@angular/core';
import {CustomerAuthService, MenuService, UserService} from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../_models';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-klantaccount',
  templateUrl: './klantaccount.component.html',
  styleUrls: ['./klantaccount.component.css']
})
export class KlantAccountComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  detailsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerAuthService: CustomerAuthService,
    private customerService: UserService,
  ) {
    this.currentUserSubscription = this.customerAuthService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      address: ['', Validators.required],
      bankAccount: ['', Validators.required]
    });
  }




}

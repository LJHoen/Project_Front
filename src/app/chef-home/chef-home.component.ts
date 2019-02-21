import {Component, Input, NgModule, OnInit, OnDestroy} from '@angular/core';
import {MenuService} from '../menu.service';
import {ChefService} from '../_services';
import {FormBuilder, Validators} from '@angular/forms';
import {Menu} from '../Menu';
import {MenuListComponent} from '../menu-list/menu-list.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ChefAuthService} from '../_services';
import {Chef, Dish} from '../_models';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-chef-home',
  templateUrl: './chef-home.component.html',
  styleUrls: ['./chef-home.component.css'],
  providers:  [MenuService],
})

@NgModule({
})
export class ChefHomeComponent implements OnInit, OnDestroy {
  currentUser: Chef;
  currentUserSubscription: Subscription;
  dish: Dish;

  @Input()
  menuList: MenuListComponent;

  constructor(
    public fb: FormBuilder,
    private chefService: ChefService,
    private route: ActivatedRoute,
    private router: Router,
    private chefAuthService: ChefAuthService,
  ) {
  this.currentUserSubscription = this.chefAuthService.currentUser.subscribe(user => {
    this.currentUser = user;
  });
    this.ngOnDestroy();
    console.log(this.currentUser);
  }

  public chefHome = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    serveTime: ['', Validators.required],
  });

  ngOnInit() {
  }

  ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
}

  public saveMenu(event) {
    console.log('test');
    const name = this.chefHome.controls['name'].value;
    const price = this.chefHome.controls['price'].value;
    const description = this.chefHome.controls['description'].value;
    const serveTime = this.chefHome.controls['serveTime'].value;
    console.log('test2');
    this.dish = new Dish(0, name, price, description, serveTime, false);
    console.log('test3');
    console.log(this.dish);
    console.log(this.currentUser);
    console.log(this.currentUser.menu);
    console.log('id in menu: ' + this.currentUser.menu.id);
    this.currentUser.menu.dishes.push(this.dish);
    console.log('test4');
    this.chefService.update(this.currentUser).subscribe();
    console.log('test5');

  }
}

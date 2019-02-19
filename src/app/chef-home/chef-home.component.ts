import {Component, Input, NgModule, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Menu} from '../Menu';
import {MenuListComponent} from '../menu-list/menu-list.component';



@Component({
  selector: 'app-chef-home',
  templateUrl: './chef-home.component.html',
  styleUrls: ['./chef-home.component.css'],
  providers:  [MenuService]
})

@NgModule({
})
export class ChefHomeComponent implements OnInit {

  @Input()
  menuList: MenuListComponent;

  constructor(public fb: FormBuilder, private menuService: MenuService) {
  }

  public chefHome = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    serveTime: ['', Validators.required],
  });

  ngOnInit() {
  }
  public saveMenu(event) {
    const name = this.chefHome.controls['name'].value;
    const price = this.chefHome.controls['price'].value;
    const description = this.chefHome.controls['description'].value;
    const serveTime = this.chefHome.controls['serveTime'].value;
    this.menuService.saveMenu(new Menu(0, name, price, description, serveTime)).subscribe(
      //  () => this.menuList.getAllMenus()
    );
  }
}

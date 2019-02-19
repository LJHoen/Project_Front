import {Component, NgModule, OnInit} from '@angular/core';
import { MenuService } from '../menu.service';
import {Menu} from '../Menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  providers:  [MenuService]
})
@NgModule({

})
export class MenuListComponent implements OnInit {

  menus: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getAllMenus();
  }

  getAllMenus() {
    this.menuService.findAll().subscribe(
      menus => {
        this.menus = menus;
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(id) {
    this.menuService.delete(id).subscribe(
      () => this.getAllMenus()
    );
  }
}

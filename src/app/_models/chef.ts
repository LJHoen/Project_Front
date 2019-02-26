import {User} from './user';
import {Dish} from './dish';

export class Chef extends User {
  dishes: Dish[] = [];
  rating: number;
  votes: number;

  /*constructor(id: string, username: string, password: string, firstName: string, lastName: string,
              address: string, bankAccount: string, token: string, dishes: Dish[]) {
    super(id, username, password, firstName, lastName, address, bankAccount, token);
    this.dishes = dishes;
  }*/
}

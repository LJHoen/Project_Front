import {User} from './user';
import {Dish} from './dish';

export class Customer extends User {
  currentOrder: Dish[] = [];
  history: Dish[][] = [];

/*
  constructor(id: string, username: string, password: string, firstName: string, lastName: string,
              address: string, bankAccount: string, token: string, currentOrder: Dish[], history: Dish[][]) {
    super(id, username, password, firstName, lastName, address, bankAccount, token);
    this.currentOrder = currentOrder;
    this.history = history;

  }
*/

}

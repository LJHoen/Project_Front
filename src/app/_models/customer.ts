import {User} from './user';
import {Bestelling} from './bestelling';

export class Customer extends User {
  currentBestelling: Bestelling;
  history: Bestelling[] = [];

/*
  constructor(id: string, username: string, password: string, firstName: string, lastName: string,
              address: string, bankAccount: string, token: string, currentOrder: Dish[], history: Dish[][]) {
    super(id, username, password, firstName, lastName, address, bankAccount, token);
    this.currentOrder = currentOrder;
    this.history = history;

  }
*/

}

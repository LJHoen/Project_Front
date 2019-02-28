import {User} from './user';
import {Bestelling} from './bestelling';

export class Customer extends User {

  currentBestelling: Bestelling = new Bestelling(0, [], [], 0);
  history: Bestelling[] = [];
  }


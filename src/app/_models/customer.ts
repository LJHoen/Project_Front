import {User} from './user';
import {Bestelling} from './bestelling';

export class Customer extends User {
  currentBestelling: Bestelling;
  history: Bestelling[] = [];
  }

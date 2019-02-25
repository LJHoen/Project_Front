import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';

import { Customer } from '../_models';

@Injectable({ providedIn: 'root' })
export class CustomerAuthService {
  private currentUserSubject: BehaviorSubject<Customer>;
  public currentUser: Observable<Customer>;
  private router: Router;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Customer {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<Customer>(`${'http://localhost:8080/'}klanten/authenticate`, {username, password} )
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          user.token = 'fake-jwt-token';
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

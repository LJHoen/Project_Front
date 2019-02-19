import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Chef } from '../_models';

@Injectable({ providedIn: 'root' })
export class ChefAuthService {
  private currentUserSubject: BehaviorSubject<Chef>;
  public currentUser: Observable<Chef>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Chef>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Chef {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<Chef>(`${'http://localhost:8080/'}chefs/authenticate`, {username, password} )
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

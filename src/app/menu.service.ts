import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Menu} from './Menu';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }


  findAll(): Observable<Menu[]>  {
    return this.http.get<any>('http://localhost:8080/menu').pipe(
      catchError(this.handleError<Menu>(`findAll`))
    );
  }

  saveMenu(menu: Menu) {

    return this.http.post('http://localhost:8080/menu', menu).pipe(
      catchError(this.handleError<Menu>(`saveMenu`))
    );

  }
  delete(id) {
    return this.http.delete('http://localhost:8080/menu/' + id).pipe(
      catchError(this.handleError<Menu>(`delete`))
    );

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}

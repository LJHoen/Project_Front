import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chef } from '../_models';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChefService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Chef[]>(`${'http://localhost:8080/'}chefs`);
  }

  getById(id: number) : Observable<Chef> {
    return this.http.get<Chef>(`${'http://localhost:8080/'}chefs/${id}`);
  }

  register(chef: Chef) {
    return this.http.post(`${'http://localhost:8080/'}chefs/register`, chef);
  }

  update(chef: Chef) {
    return this.http.put(`${'http://localhost:8080/'}chefs/${chef.id}`, chef);
  }

  delete(id: number) {
    return this.http.delete(`${'http://localhost:8080/'}chefs/${id}`);
  }
}

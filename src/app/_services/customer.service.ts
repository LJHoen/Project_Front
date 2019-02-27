import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../_models/customer';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Customer[]>(`${'http://localhost:8080/'}klanten`);
  }

  getById(id: number) : Observable<Customer> {
    return this.http.get<Customer>(`${'http://localhost:8080/'}klanten/${id}`);
  }

  register(customer: Customer) {
    return this.http.post(`${'http://localhost:8080/'}klanten/register`, customer);
  }

  update(customer: Customer) {
    return this.http.put(`${'http://localhost:8080/'}klanten/${customer.id}`, customer);
  }

  delete(id: number) {
    return this.http.delete(`${'http://localhost:8080/'}klanten/${id}`);
  }
}

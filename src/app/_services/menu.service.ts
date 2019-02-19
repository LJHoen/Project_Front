import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../_models';




@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Dish[]>(`${'http://localhost:8080/'}dishes`);
  }

  getAllAvailable() {
    return this.http.get<Dish[]>(`${'http://localhost:8080/'}dishes/available`);
  }

  getById(id: number) {
    return this.http.get<Dish>(`${'http://localhost:8080/'}dishes/${id}`);
  }

  save(dish: Dish) {
    return this.http.post(`${'http://localhost:8080/'}dishes/save`, dish);
  }

  update(dish: Dish) {
    return this.http.put(`${'http://localhost:8080/'}dishes/${dish.id}`, dish);
  }

  delete(id: number) {
    return this.http.delete(`${'http://localhost:8080/'}dishes/${id}`);
  }
}

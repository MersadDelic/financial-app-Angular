import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Budget} from '../models/budget';


/**
 * Authorization header sa fixsnim tokenom
 */
const httpOptions = {
  headers: new HttpHeaders({
    Authorization:  `Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoibWVyc28iLCJleHAiOjE1NzI3MjA3MTl9.SXhFzEgXP-i6ZpcYAoxD43D_tCYQsTZ13Dyl02oOTG63LT56rgIdl4pYlmrU1KVLzwddsY-MDh-yK8F0XEGyOw`
  })
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) {
  }

  private BUDGET_API = '/api/budget';


  getBudgets(): Observable<any> {
    return this.http.get(this.BUDGET_API);
  }

  getBudget(id: number): Observable<any> {
    return this.http.get(this.BUDGET_API + `/${id}`);
  }

  createBudget(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.BUDGET_API, budget);
  }
}

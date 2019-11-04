import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Budget} from '../models/budget';

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

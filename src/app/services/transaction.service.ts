import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Transaction } from '../models/transaction';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {
  }

  private TRANS_API = '/api/transaction';

  getTransactions(): Observable<any> {
    return this.http.get(this.TRANS_API);
  }

  getTransaction(id: number): Observable<any> {
    return this.http.get(this.TRANS_API + `/${id}`);
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    console.log(transaction);
    return this.http.post<Transaction>(this.TRANS_API, transaction);
  }
}

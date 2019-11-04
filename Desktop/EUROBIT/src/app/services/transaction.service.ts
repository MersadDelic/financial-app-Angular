import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Transaction } from '../models/transaction';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization:  `Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoibWVyc28iLCJleHAiOjE1NzI3MjA3MTl9.SXhFzEgXP-i6ZpcYAoxD43D_tCYQsTZ13Dyl02oOTG63LT56rgIdl4pYlmrU1KVLzwddsY-MDh-yK8F0XEGyOw`
  })
};

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

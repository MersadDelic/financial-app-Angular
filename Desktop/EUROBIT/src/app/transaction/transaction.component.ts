import { Component, OnInit } from '@angular/core';
import {Transaction} from '../models/transaction';
import {TransactionService} from '../services/transaction.service';
import {Router} from '@angular/router';
import {Budget} from '../models/budget';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  budget: Budget;
  transaction: Transaction = new Transaction();
  submitted = false;
  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
  }

  getmyTransaction(id: number) {
    this.transactionService.getTransaction(id).subscribe(
      res => {
        this.transaction = res;
      },
      error => console.log(error)
    );
  }
   saveTransaction() {
    this.transactionService.createTransaction(this.transaction)
      .subscribe(
        data => console.log(data),
          error => console.log(error.error));
      }
  onSubmit() {
    this.submitted = true;
    this.saveTransaction();

  }
  }


import { Component, OnInit } from '@angular/core';
import {Transaction} from '../models/transaction';
import {TransactionService} from '../services/transaction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Budget} from '../models/budget';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  budgetId: number;
  transaction: Transaction = new Transaction(); // kreira novi objekat 'transaction' i doda je u listu
  submitted = false;

  constructor(private transactionService: TransactionService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.budgetId = +this.route.snapshot.paramMap.get('id');
    this.transaction.budget = this.budgetId;

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
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['budget' + `/${(this.budgetId)}/`]);

  }
}


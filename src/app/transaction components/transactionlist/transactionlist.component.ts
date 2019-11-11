import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {Transaction} from '../../models/transaction';
import {Budget} from '../../models/budget';
import {ActivatedRoute, Router} from '@angular/router';
import {BudgetService} from '../../services/budget.service';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit {

//  transactionList: Transaction[] = [];
  // selectedBudget: Budget;
  budgetList: Budget[] = [];
  budgetId: number;

  transaction: Transaction = new Transaction(); // kreira novi objekat 'transaction' i doda je u listu
  transactionList: Transaction[] = [];
  budget: Budget;
  constructor(private transactionService: TransactionService,
              private router: Router,
              private route: ActivatedRoute,
              private budgetService: BudgetService) { }

  ngOnInit() {
    this.getAllBudgets();
    this.getTransactionList();

  }

  saveTransaction() {

    this.transaction.budget = this.budgetId;
    this.transactionService.createTransaction(this.transaction)
      .subscribe(
        data => { console.log(data),
        this.gotoList(); },

        error1 => console.log(error1.error));
  }

  getAllBudgets() {
    this.budgetService.getBudgets().subscribe(
      list => this.budgetList = list,
      error1 => console.log(error1));
  }

  getTransactionList() {
    this.transactionService.getTransactions().subscribe(
      res => {
        this.transactionList = res;
        this.transactionList.push(this.transaction);
      },
      error1 => console.log(error1)
    );
  }
  gotoList() {
    this.router.navigate(['dashboard/transactionlist']);

  }
}

import {Component, Input, OnInit, Output} from '@angular/core';
import {Transaction} from '../../models/transaction';
import {TransactionService} from '../../services/transaction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Budget} from '../../models/budget';
import {BudgetService} from '../../services/budget.service';
import {error} from 'util';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
//  transactionList: Transaction[] = [];
  budgetList: Budget[] = [];
  // selectedBudget: Budget;
  budgetId: number;

  transaction: Transaction = new Transaction(); // kreira novi objekat 'transaction' i doda je u listu
  submitted = false;

  constructor(private transactionService: TransactionService,
              private router: Router,
              private route: ActivatedRoute,
              private budgetService: BudgetService) {
  }

  ngOnInit() {
    this.getAllBudgets();
  }

  /*this.budgetId = +this.route.snapshot.paramMap.get('id');
  this.transaction.budget = this.budgetId;*/

  saveTransaction() {

    this.transaction.budget = this.budgetId;
    this.transactionService.createTransaction(this.transaction)
      .subscribe(
        data => console.log(data),
        error1 => console.log(error1.error));
  }

  getAllBudgets() {
    this.budgetService.getBudgets().subscribe(
      list => this.budgetList = list,
      error1 => console.log(error1));
  }

  onSubmit() {
    this.submitted = true;
    this.saveTransaction();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['dashboard/transactionlist']);

  }
}


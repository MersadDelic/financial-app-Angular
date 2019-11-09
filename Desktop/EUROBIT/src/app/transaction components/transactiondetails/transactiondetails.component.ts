import {Component, OnInit} from '@angular/core';
import {Transaction} from '../../models/transaction';
import {Budget} from '../../models/budget';
import {ActivatedRoute} from '@angular/router';
import {TransactionService} from '../../services/transaction.service';
import {BudgetService} from '../../services/budget.service';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.css']
})
export class TransactiondetailsComponent implements OnInit {

  transaction: Transaction;
  budget: Budget;
  constructor(private route: ActivatedRoute,
              private transactionService: TransactionService,
              private budgetService: BudgetService) {
  }

  ngOnInit() {
    this.getmyTransaction();
  }

  getmyTransaction() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.transactionService.getTransaction(id)
      .subscribe(transaction => {
          this.transaction = transaction;
          this.getTransactionBudget();
        },
        error => console.error(error)
      );
  }

  getTransactionBudget() {
    this.budgetService.getBudget(this.transaction.budget).subscribe(
      data => this.budget = data,
      error => console.log(error)
    );
  }
}

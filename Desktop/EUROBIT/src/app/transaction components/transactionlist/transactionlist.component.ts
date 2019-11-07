import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {Transaction} from '../../models/transaction';
import {Budget} from '../../models/budget';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit {


  transactionList: Transaction[] = [];
  budget: Budget;
  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getmyTransaction();

  }
  getmyTransaction() {
    this.transactionService.getTransactions().subscribe(
      res => {
        this.transactionList = res;
      },
      error1 => console.log(error1)
    );
  }

}

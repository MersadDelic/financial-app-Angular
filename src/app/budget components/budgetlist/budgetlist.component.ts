import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget';
import {BudgetService} from '../../services/budget.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrls: ['./budgetlist.component.css']
})
export class BudgetlistComponent implements OnInit {
  budgetList: Budget[] = [];
  budget: Budget = new Budget();

  constructor(private budgetService: BudgetService, private router: Router) {
  }

  ngOnInit() {
    this.getBudgets();

  }

  getBudgets() {
    this.budgetService.getBudgets().subscribe(
      res => {
        this.budgetList = res;
        this.budgetList.push(this.budget);
      },
      error1 => console.log(error1)
    );
  }
  saveBudget() {
    this.budgetService.createBudget(this.budget)
      .subscribe(
        () => this.gotoList(),
        error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['dashboard/budgetlist']);
  }
}

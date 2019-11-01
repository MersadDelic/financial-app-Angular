import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BudgetService} from '../budget.service';
import {Budget} from '../budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetList: Budget [] = [];
  budget: Budget = new Budget();
  submitted = false;

  constructor(private budgetService: BudgetService, private router: Router) {
  }

  ngOnInit() {
    this.getBudgets();
  }

  getBudget(id: number) {
    this.budgetService.getBudget(id).subscribe(
      budget => {
        this.budget = budget;
      },
      error => console.log(error)
    );
  }

  getBudgets() {
    this.budgetService.getBudgets().subscribe(
      res => {
        this.budgetList = res;
      },
      error1 => console.log(error1)
    );
  }

  saveBudget() {
    this.budgetService.createBudget(this.budget)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.budget = new Budget();
  }

  onSubmit() {
    this.submitted = true;
    this.saveBudget();
  }
}

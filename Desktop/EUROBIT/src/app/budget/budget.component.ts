import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BudgetService} from '../services/budget.service';
import {Budget} from '../models/budget';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetList: Budget [] = [];
  budget: Budget = new Budget();  /* new Budget() --> prazan objekat */
  submitted = false;

  constructor(private budgetService: BudgetService, private router: Router) {
  }

  ngOnInit() {

  }

  getBudget(id: number) {
    this.budgetService.getBudget(id).subscribe(
      res => {
        this.budget = res;
      },
      error => console.log(error)
    );
  }


  saveBudget() {
    this.budgetService.createBudget(this.budget)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveBudget();
    this.budgetList.push(this.budget);
    this.gotoList();

  }
  gotoList() {
    //this.router.navigate(['dashboard/:id/budgetlist']);
  }
}

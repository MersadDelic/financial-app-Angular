import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BudgetService} from '../../services/budget.service';
import {Budget} from '../../models/budget';
import {Transaction} from '../../models/transaction';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  transaction: Transaction;
 // budgetList: Budget [] = [];
  // budgetId: number;
  budget: Budget = new Budget();  /* new Budget() --> kreira prazan objekat 'budget' */
  submitted = false;

  constructor(private budgetService: BudgetService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  /*getBudget(id: number) {
    this.budgetService.getBudget(id).subscribe(
      res => {
        this.budget = res;

      },
      error => console.log(error)
    );
  }*/


  saveBudget() {
    this.budgetService.createBudget(this.budget)
      .subscribe(
        () => this.gotoList(),
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveBudget();
  //  this.budgetList.push(this.budget);
   // this.gotoList();

  }
  gotoList() {
    this.router.navigate(['budget/budgetlist']);
  }
}

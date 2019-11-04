import { Component, OnInit } from '@angular/core';
import {Budget} from '../models/budget';
import {BudgetService} from '../services/budget.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-budgetdetails',
  templateUrl: './budgetdetails.component.html',
  styleUrls: ['./budgetdetails.component.css']
})
export class BudgetdetailsComponent implements OnInit {

    budget: Budget[] = [];
  constructor(private route: ActivatedRoute,
              private budgetService: BudgetService) { }

  ngOnInit() {
    this.getmyBudget();
  }
 getmyBudget() {
   const id = +this.route.snapshot.paramMap.get('id');
   this.budgetService.getBudget(id)
     .subscribe(budget => this.budget = budget);
 }
}

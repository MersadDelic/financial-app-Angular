import {Component, OnInit} from '@angular/core';
import {Budget} from '../../models/budget';
import {BudgetService} from '../../services/budget.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-budgetdetails',
  templateUrl: './budgetdetails.component.html',
  styleUrls: ['./budgetdetails.component.css']
})
export class BudgetdetailsComponent implements OnInit {

  budget: Budget;
  beneficiaryId: number;

  constructor(private route: ActivatedRoute,
              private budgetService: BudgetService) {
  }

  ngOnInit() {
    this.getmyBudget();
  }

  getmyBudget() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.budgetService.getBudget(id).subscribe(budget => this.budget = budget);
  }

  addBeneficiary() {
    this.budgetService.addBeneficiary(this.budget.id, this.beneficiaryId)
      .subscribe(
        data => console.log('uspjesno dodan korisnik budzetu: ' + JSON.stringify(data)),
        error => console.log('greska pri dodavanja korisnika budzetu: ' + error.error));
  }

  onSubmitBeneficiary() {
    this.addBeneficiary();
    this.getmyBudget(); // get budget again
  }
}

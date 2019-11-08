import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BudgetService} from "../../services/budget.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  beneficiary: number;
  budgetId: number;

  constructor(private budgetService: BudgetService,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.budgetId = +this.route.snapshot.paramMap.get('id');
  }

  addBeneficiaryToBudget() {
    this.budgetService.addBeneficiary(this.budgetId, this.beneficiary)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }

  onSubmit() {
    this.addBeneficiaryToBudget();
    this.location.back();
  }
}

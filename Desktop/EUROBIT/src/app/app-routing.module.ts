import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';
import {BudgetComponent} from './budget/budget.component';
import {BudgetdetailsComponent} from './budgetdetails/budgetdetails.component';
import {TransactionComponent} from './transaction/transaction.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'budgetlist', component: BudgetlistComponent},
  { path: 'createbudget', component: BudgetComponent},
  { path: 'budget/:id', component: BudgetdetailsComponent},
  { path: 'budget/:id/transaction', component: TransactionComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';
import {BudgetComponent} from './budget/budget.component';
import {BudgetdetailsComponent} from './budgetdetails/budgetdetails.component';
import {TransactionComponent} from './transaction/transaction.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TransactiondetailsComponent} from './transactiondetails/transactiondetails.component';
import {TransactionlistComponent} from './transactionlist/transactionlist.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'budget/budgetlist', component: BudgetlistComponent},
  {path: 'budget/createbudget', component: BudgetComponent},
  {path: 'budget/:id', component: BudgetdetailsComponent},
  {path: 'budget/:id/addtransaction', component: TransactionComponent},
  {path: 'budget/:id/transactionlist', component: TransactionlistComponent},
  {path: 'transaction/:id', component: TransactiondetailsComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BudgetlistComponent} from './budget components/budgetlist/budgetlist.component';
import {BudgetdetailsComponent} from './budget components/budgetdetails/budgetdetails.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TransactiondetailsComponent} from './transaction components/transactiondetails/transactiondetails.component';
import {TransactionlistComponent} from './transaction components/transactionlist/transactionlist.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/budgetlist', component: BudgetlistComponent, canActivate: [AuthGuard]},
  {path: 'budget/:id', component: BudgetdetailsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/transactionlist', component: TransactionlistComponent, canActivate: [AuthGuard]},
  {path: 'transaction/:id', component: TransactiondetailsComponent, canActivate: [AuthGuard]}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

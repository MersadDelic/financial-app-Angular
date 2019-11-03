import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';
import {BudgetComponent} from './budget/budget.component';
import {BudgetdetailsComponent} from './budgetdetails/budgetdetails.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'budgetlist', component: BudgetlistComponent},
  { path: 'createbudget', component: BudgetComponent},
  { path: 'budget/:id', component: BudgetdetailsComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
